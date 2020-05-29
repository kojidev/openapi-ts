import { Schema } from '../../../src/schema';
import { schemaRef } from '../../../src/utils';

export const id: Schema = {
  example: 'e2fb10b9-71ba-4bae-b6c5-b8592caf97e4',
  type: 'string',
};

export const idRef = schemaRef('id', id);
