import { Parameter } from './Parameter';
import { Reference } from './Reference';
import { RequestBody } from './RequestBody';
import { Responses } from './Responses';
import { SecurityRequirement } from './SecurityRequirement';

export interface Operation {
  operationId?: string;
  parameters?: (Parameter | Reference)[];
  requestBody?: RequestBody | Reference;
  responses: Responses;
  security?: SecurityRequirement[];
  summary?: string;
  tags?: string[];
}
