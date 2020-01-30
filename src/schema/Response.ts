import {MediaType} from './MediaType';

export type Response = {
    description: string;
    content?: { [key: string]: MediaType };
}
