import { Parameter } from './Parameter';
import { Reference } from './Reference';
import { RequestBody } from './RequestBody';
import { Responses } from './Responses';
import { SecurityRequirement } from './SecurityRequirement';

export interface Operation {
  tags?: string[];
  summary?: string;
  operationId?: string;
  parameters?: (Parameter | Reference)[];
  requestBody?: RequestBody | Reference;
  security?: SecurityRequirement[];
  responses: Responses;
}
