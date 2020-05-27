import {MediaType} from './MediaType';

export interface RequestBody {
    content: { [key: string]: MediaType };
}
