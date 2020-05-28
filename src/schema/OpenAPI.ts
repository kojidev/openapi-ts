import { Info } from './Info';
import { Server } from './Server';
import { Paths } from './Paths';
import { Components } from './Components';

export const openApiVersion = '3.0.3' as const;

export interface OpenAPI {
  components?: Components;
  info: Info;
  openapi: typeof openApiVersion;
  paths: Paths;
  servers?: Server[];
}
