import { Schema } from './Schema';
import { Reference } from './Reference';
import { Encoding } from './Encoding';
import { Example } from './Example';

export interface MediaType {
  encoding?: { [key: string]: Encoding; };
  example?: any;
  examples?: { [key: string]: string | Example | Reference; };
  schema?: Schema | Reference;
}
