import { Schema } from './Schema';
import { MediaType } from './MediaType';
import { Example } from './Example';
import { Reference } from './Reference';

type ParameterIn = 'query' | 'header' | 'path' | 'cookie';

interface CommonParameter {
  content?: { [contentType: string]: string | MediaType; };
  deprecated?: boolean;
  description?: string;
  example?: any;
  examples?: { [exampleName: string]: string | Example | Reference; };
  in: ParameterIn;
  name: string;
  schema?: Schema | Reference;
}

export interface CookieParameter extends CommonParameter {
  in: 'cookie';
  required?: boolean;
}

export interface HeaderParameter extends CommonParameter {
  in: 'header';
  required?: boolean;
}

export interface PathParameter extends CommonParameter {
  in: 'path';
  required: true,
}

export interface QueryParameter extends CommonParameter {
  allowReserved?: boolean;
  in: 'query';
  required?: boolean;
}

export type Parameter = CookieParameter | HeaderParameter | PathParameter | QueryParameter;
