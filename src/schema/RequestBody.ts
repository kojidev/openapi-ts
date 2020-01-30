import {MediaType} from './MediaType';

export type RequestBody = {
    content: { [key: string]: MediaType };
}
