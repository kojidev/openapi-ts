import { Reference } from './Reference';
import { Discriminator } from './Discriminator';

// export type Schema =
//   ArraySchema |
//   ObjectSchema |
//   StringSchema |
//   BooleanSchema |
//   NumberSchema |
//   IntegerSchema |
//   ComposedSchema;

export type Schema<T = any> = T extends ObjectSchema ? ObjectSchema :
  T extends ArraySchema ? ArraySchema :
    T extends StringSchema ? StringSchema :
      T extends IntegerSchema ? IntegerSchema :
        T extends NumberSchema ? NumberSchema :
          T extends BooleanSchema ? BooleanSchema :
            T extends ComposedSchema ? ComposedSchema : never;

interface CommonSchema {
  enum?: any[];
  title?: string;
  example?: any;
}

export interface ArraySchema extends CommonSchema {
  type: 'array';
  items: Schema | Reference;
}

export interface ObjectSchema extends CommonSchema {
  type: 'object';
  properties: { [key: string]: Schema | Reference };
}

interface PrimitiveSchema extends CommonSchema {
  format?: string;
}

export interface StringSchema extends PrimitiveSchema {
  type: 'string'
}

export interface BooleanSchema extends PrimitiveSchema {
  type: 'boolean'
}

export interface NumberSchema extends PrimitiveSchema {
  type: 'number'
}

export interface IntegerSchema extends PrimitiveSchema {
  type: 'integer'
}

export interface ComposedSchema extends CommonSchema {
  oneOf?: (Schema | Reference)[];
  allOf?: (Schema | Reference)[];
  anyOf?: (Schema | Reference)[];
  discriminator?: Discriminator;
}
