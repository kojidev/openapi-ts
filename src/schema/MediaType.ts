import {Schema} from './Schema';
import {Reference} from './Reference';

export type MediaType = {
    schema?: Schema | Reference;
}
