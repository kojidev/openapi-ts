import {
  AllowRef,
  Ref,
} from '../../../src/utils';
import {
  Response,
  Schema,
} from '../../../src/schema';

export function json(
  description: string,
  schema: Ref<'responses'> | AllowRef<Schema>,
): AllowRef<Response> {
  return {
    content: {
      'application/json': {
        schema,
      },
    },
    description,
  };
}
