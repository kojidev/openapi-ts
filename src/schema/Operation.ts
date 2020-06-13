import { Parameter } from './Parameter';
import { Reference } from './Reference';
import { RequestBody } from './RequestBody';
import { Responses } from './Responses';
import { SecurityRequirement } from './SecurityRequirement';
import { Callback } from './Callback';
import { ExternalDocumentation } from './ExternalDocumentation';
import { Server } from './Server';

export interface Operation {
  callbacks?: { [identifier: string]: Callback | Reference; };
  deprecated?: boolean;
  description?: string;
  externalDocs?: ExternalDocumentation;
  operationId?: string;
  parameters?: (Parameter | Reference)[];
  requestBody?: RequestBody | Reference; // TODO: Schema passes
  responses: Responses;
  security?: SecurityRequirement[];
  servers?: Server[];
  summary?: string;
  tags?: string[];
}
