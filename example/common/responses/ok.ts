import { json } from './json';
import {
  AllowRef,
  Ref,
} from '../../../src/utils';
import {
  Responses,
  Schema,
} from '../../../src/schema';

export const ok = (schema: Ref<'responses'> | AllowRef<Schema>): AllowRef<Responses> => (
  { 200: json('OK', schema) }
);
