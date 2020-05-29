// export type Listing<T extends Ref> = {
//   type: 'object',
//   properties: {
//     items: {
//       type: 'array',
//       items: T,
//     }
//   }
// }
//
// export function listing<T extends Ref>(item: T): Listing<T> {
//   return {
//     type: 'object',
//     properties: {
//       items: {
//         type: 'array',
//         items: item,
//       }
//     },
//   }
// }

import {
  AllowRef,
  Ref,
} from '../../../src/utils';
import { Responses } from '../../../src/schema';
import { ok } from '../responses/ok';

export function listing(item: Ref<'schemas'>): AllowRef<Responses> {
  return ok({
    properties: {
      items: {
        items: item,
        type: 'array',
      },
    },
    type: 'object',
  });
}
