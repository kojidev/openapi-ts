import { Operation } from './Operation';
import { Parameter } from './Parameter';
import { Reference } from './Reference';
import { Server } from './Server';

export interface PathItem {
  $ref?: string;
  delete?: Operation;
  description?: string;
  get?: Operation;
  head?: Operation;
  options?: Operation;
  parameters?: (Parameter | Reference)[];
  patch?: Operation;
  post?: Operation;
  put?: Operation;
  servers?: Server[];
  summary?: string;
  trace?: Operation;
}
