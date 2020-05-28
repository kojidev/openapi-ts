import { Schema } from '../schema/Schema';
import { Reference } from '../schema/Reference';
import { Discriminator } from '../schema/Discriminator';
import { NoExtraProperties } from './noExtraProperties';
import { Components } from '../schema/Components';

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
  readonly value: V;

  readonly componentsKey: CK;

  readonly key: string;

  constructor(
    value: V,
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
  schema: T,
): Ref<'schemas', T> {
  return new Ref(
    schema,
    'schemas',
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

function toReference<K extends keyof Components>(src: Ref<K>, components: Components): Reference {
  const key = src.key.split(' ').join('-') as keyof Components[K];

  if (components[src.componentsKey] === undefined) {
    components[src.componentsKey] = {};
  }

  components[src.componentsKey][key] = resolveRefs(src.value, components) as Components[K][typeof key];

  return {
    $ref: `#/components/${src.componentsKey}/${key}`,
  };
}

export function resolveRefs<T>(
  src: T,
  components: Components,
): T extends ObjectAllowRef<infer A> ? A :
    T extends ArrayAllowRef<infer A> ? A[] : never {
  if (Array.isArray(src)) {
    return src.map((it) => resolveRefs(it, components)) as any;
  } if (typeof src === 'object') {
    if (src instanceof InlineRef) {
      return toReference(src.inlinedRef, components).$ref as any;
    } if (src instanceof Ref) {
      return toReference(src, components) as any;
    }

    const result: any = {};

    Object
      .entries(src)
      .forEach(([key, value]) => {
        result[key] = resolveRefs(value, components);
      });

    return result;
  }

  return src as any;
}
