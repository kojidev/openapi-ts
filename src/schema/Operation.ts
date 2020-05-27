import {Parameter} from './Parameter';
import {Reference} from './Reference';
import {RequestBody} from './RequestBody';
import {Responses} from './Responses';

export interface Operation {
    tags?: string[];
    summary?: string;
    operationId?: string;
    parameters?: (Parameter | Reference)[];
    requestBody?: RequestBody | Reference;
    responses: Responses;
}
