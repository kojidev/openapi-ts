import { schemaRef } from '../../../src/utils';
import { string } from '../../common/schemas/string';
import { unixTimeRef } from '../../common/schemas/unixTime';
import { idRef } from '../../common/schemas/id';

export const bookSchemaRef = schemaRef('Book', {
  properties: {
    author: string,
    createdAt: unixTimeRef,
    id: idRef,
    title: string,
  },
  type: 'object',
});
