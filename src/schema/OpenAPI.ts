import { Info } from "./Info";
import { Server } from "./Server";
import { Paths } from "./Paths";
import { Components } from './Components';

export const openApiVersion = '3.0.3' as const;

export type OpenAPI = {
  openapi: typeof openApiVersion;
  info: Info;
  servers?: Server[];
  paths: Paths;
  components?: Components;
}
