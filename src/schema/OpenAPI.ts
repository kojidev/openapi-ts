import { Info } from './Info';
import { Server } from './Server';
import { Paths } from './Paths';
import { Components } from './Components';

export const openapi = '3.0.3' as const;

export interface OpenAPI {
  components?: Components;
  info: Info;
  openapi: typeof openapi;
  paths: Paths;
  servers?: Server[];
}
