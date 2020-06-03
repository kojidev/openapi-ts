import { Info } from './Info';
import { Server } from './Server';
import { Paths } from './Paths';
import { Components } from './Components';
import { ExternalDocumentation } from './ExternalDocumentation';
import { SecurityRequirement } from './SecurityRequirement';
import { Tag } from './Tag';

export const openapi = '3.0.3' as const;

export interface OpenAPI {
  components?: Components;
  externalDocs?: ExternalDocumentation;
  info: Info;
  openapi: typeof openapi;
  paths: Paths;
  security?: SecurityRequirement[];
  servers?: Server[];
  tags?: Tag[];
}
