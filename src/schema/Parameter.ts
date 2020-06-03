import { Schema } from './Schema';
import { MediaType } from './MediaType';
import { Example } from './Example';
import { Reference } from './Reference';

type ParameterIn = 'query' | 'header' | 'path' | 'cookie';

export interface Parameter {
  content?: { [contentType: string]: string | MediaType; };
  deprecated?: boolean;
  description?: string;
  example?: any;
  examples?: { [exampleName: string]: string | Example | Reference; };
  in: ParameterIn;
  name: string;
  schema?: Schema | Reference;
}

export interface CookieParameter extends Parameter {
  in: 'cookie';
  required?: boolean;
}

export interface HeaderParameter extends Parameter {
  in: 'header';
  required?: boolean;
}

export interface PathParameter extends Parameter {
  in: 'path';
}

export interface QueryParameter extends Parameter {
  allowReserved?: boolean;
  in: 'query';
  required?: boolean;
}
