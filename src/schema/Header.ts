import { MediaType } from './MediaType';
import { Example } from './Example';
import { Reference } from './Reference';
import { Schema } from './Schema';

export interface Header {
  content?: { [contentType: string]: string | MediaType; };
  deprecated?: boolean;
  description?: string;
  example?: any;
  examples?: { [exampleName: string]: string | Example | Reference; };
  required?: boolean;
  schema?: Schema | Reference;
}
