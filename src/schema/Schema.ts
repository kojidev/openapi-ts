import { Reference } from './Reference';
import { Discriminator } from './Discriminator';
import { ExternalDocumentation } from './ExternalDocumentation';

export type Schema<T = any> = T extends ObjectSchema ? ObjectSchema :
  T extends ArraySchema ? ArraySchema :
    T extends StringSchema ? StringSchema :
      T extends IntegerSchema ? IntegerSchema :
        T extends NumberSchema ? NumberSchema :
          T extends BooleanSchema ? BooleanSchema :
            T extends ComposedSchema ? ComposedSchema : never;

interface CommonSchema<V> {
  default?: V;
  enum?: V[]
  deprecated?: boolean;
  description?: string;
  externalDocs?: ExternalDocumentation;
  nullable?: boolean;
  readOnly?: boolean;
  title?: string;
  writeOnly?: boolean;
  not?: (Schema | Reference)[];
}

export interface ArraySchema extends CommonSchema<any> {
  items: Schema | Reference;
  maxItems?: number;
  minItems?: number;
  type: 'array';
  uniqueItems?: boolean;
}

export interface ObjectSchema extends CommonSchema<any> {
  additionalProperties?: boolean | Schema | Reference;
  discriminator?: Discriminator;
  maxProperties?: number;
  minProperties?: number;
  properties: { [propertyName: string]: Schema | Reference; };
  required?: string[];
  type: 'object';
}

export interface StringSchema extends CommonSchema<string> {
  example?: string | null;
  format?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  type: 'string'
}

export interface BooleanSchema extends CommonSchema<boolean> {
  default?: boolean;
  example?: boolean | null;
  format?: string;
  type: 'boolean'
}

export interface NumberSchema extends CommonSchema<number> {
  default?: number;
  example?: number | null;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  format?: string;
  maximum?: number;
  minimum?: number;
  multipleOf?: number;
  type: 'number';
}

export interface IntegerSchema extends CommonSchema<number> {
  default?: number;
  example?: number | null;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  format?: string;
  maximum?: number;
  minimum?: number;
  multipleOf?: number;
  type: 'integer'
}

export interface ComposedSchema extends CommonSchema<any> {
  type?: undefined;
  allOf?: (Schema | Reference)[];
  anyOf?: (Schema | Reference)[];
  discriminator?: Discriminator;
  oneOf?: (Schema | Reference)[];
}
