import {MediaType} from './MediaType';

export interface Response {
    description: string;
    content?: { [key: string]: MediaType };
}
