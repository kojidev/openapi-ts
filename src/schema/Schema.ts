import { Reference } from './Reference';
import { Discriminator } from './Discriminator';
import { ExternalDocumentation } from './ExternalDocumentation';

// maullable: 123 passed

export type Schema =
  ObjectSchema |
  ArraySchema |
  StringSchema |
  IntegerSchema |
  NumberSchema |
  BooleanSchema |
  ComposedSchema;

export interface CommonSchema<V> {
  default?: V;
  deprecated?: boolean;
  description?: string;
  enum?: V[],
  externalDocs?: ExternalDocumentation;
  not?: (Schema | Reference)[];
  nullable?: boolean;
  readOnly?: boolean;
  title?: string;
  writeOnly?: boolean;
}

export interface ArraySchema extends CommonSchema<any> {
  items: Schema | Reference;
  maxItems?: number;
  minItems?: number;
  type: 'array';
  uniqueItems?: boolean;
}

export type ObjectSchema = CommonSchema<any> & {
  discriminator?: Discriminator;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  type: 'object';
} & ({
  properties: { [propertyName: string]: Schema | Reference; };
} | {
  additionalProperties: boolean | Schema | Reference;
});

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

type EitherOf = { allOf: (Schema | Reference)[]; } |
{ anyOf: (Schema | Reference)[]; } |
{ oneOf: (Schema | Reference)[]; };

export type ComposedSchema = CommonSchema<any> & EitherOf & {
  discriminator?: Discriminator;
  type?: undefined;
};
