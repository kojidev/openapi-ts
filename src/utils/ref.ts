import { Schema } from '../schema/Schema';
import { Reference } from '../schema/Reference';
import { Discriminator } from '../schema/Discriminator';
import { NoExtraProperties } from './noExtraProperties';
import { Components } from '../schema/Components';
import { Response } from '../schema';

export type AllowRef<T> =
  T extends NoExtraProperties<Reference> ? (T | Ref<keyof Components>) :
    T extends Discriminator ? (T | AllowRefDiscriminator) :
      T extends Array<infer K> ? ArrayAllowRef<K> :
        T extends object ? ObjectAllowRef<T> :
          T;

type AllowRefDiscriminator = {
  mapping?: { [key: string]: string | InlineRef<Ref<'schemas'>>; };
  propertyName: string;
};

type ComponentObjects = {
  [K in keyof Components]-?: Exclude<NonNullable<Components[K]>[keyof Components[K]], Reference>;
};

type ComponentObject = ComponentObjects[keyof ComponentObjects];

export type ObjectAllowRef<T extends ComponentObject> = {
  [K in keyof T]: AllowRef<T[K]>;
};

export type ArrayAllowRef<K> = Array<AllowRef<K>>;

export class Ref<CK extends keyof Components, V extends ObjectAllowRef<ComponentObject> = any> {
  value: V | null;

  readonly componentsKey: CK;

  readonly key: string;

  constructor(
    value: null | V,
    componentsKey: CK,
    key: string,
  ) {
    this.componentsKey = componentsKey;
    this.key = key;
    this.value = value;
  }
}

export function schemaRef<T extends ObjectAllowRef<Schema>>(
  key: string,
  schema: T | null = null,
): Ref<'schemas', T> {
  return new Ref(
    schema,
    'schemas',
    key,
  );
}

export function responseRef<T extends AllowRef<Response>>(
  key: string,
  response: T | null = null,
): Ref<'responses', T> {
  return new Ref(
    response,
    'responses',
    key,
  );
}

class InlineRef<T extends Ref<'schemas'>> {
  readonly inlinedRef: T;

  constructor(inlinedRef: T) {
    this.inlinedRef = inlinedRef;
  }
}

export function inlineRef<T extends Ref<'schemas'>>(
  ref: Ref<'schemas'>,
): InlineRef<Ref<'schemas'>> {
  return new InlineRef(ref);
}

function toReference<K extends keyof Components>(
  src: Ref<K>,
  components: Components,
  set: Set<Ref<any>>,
): Reference {
  const key = src.key.split(' ').join('-') as keyof Components[K];

  if (!set.has(src)) {
    set.add(src);
    if (components[src.componentsKey] === undefined) {
      components[src.componentsKey] = {};
    }

    components[src.componentsKey][key] = doResolveRefs(src.value, components, set) as Components[K][typeof key];
  }

  return {
    $ref: `#/components/${src.componentsKey}/${key}`,
  };
}

type Resolved<T> = T extends ObjectAllowRef<infer A> ? A :
  T extends ArrayAllowRef<infer A> ? A[] : never;

export function resolveRefs<T>(
  src: T,
  components: Components,
): Resolved<T> {
  const set = new Set<Ref<any>>();

  return doResolveRefs(src, components, set);
}

function doResolveRefs<T>(
  src: T,
  components: Components,
  set: Set<Ref<any>>,
): Resolved<T> {
  if (Array.isArray(src)) {
    return src.map((it) => doResolveRefs(it, components, set)) as any;
  }
  if (typeof src === 'object') {
    if (src instanceof InlineRef) {
      return toReference(src.inlinedRef, components, set).$ref as any;
    }
    if (src instanceof Ref) {
      return toReference(src, components, set) as any;
    }

    const result: any = {};

    Object
      .entries(src)
      .forEach(([key, value]) => {
        result[key] = doResolveRefs(value, components, set);
      });

    return result;
  }

  return src as any;
}
