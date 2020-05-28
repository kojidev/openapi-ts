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

export interface CookieParameter {
  in: 'cookie';
  required?: boolean;
}

export interface HeaderParameter {
  in: 'header';
  required?: boolean;
}

export interface PathParameter {
  in: 'path';
}

export interface QueryParameter {
  allowReserved?: boolean;
  in: 'query';
  required?: boolean;
}
