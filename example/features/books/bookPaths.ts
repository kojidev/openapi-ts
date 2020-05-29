import { AllowRef } from '../../../src/utils';
import { Paths } from '../../../src/schema';
import { bookSchemaRef } from './schemas';
import { listing } from '../../common/schemas/listing';

export const bookPaths: AllowRef<Paths> = {
  '/v1/books': {
    get: {
      responses: {
        ...listing(bookSchemaRef),
      },
    },
  },
};
