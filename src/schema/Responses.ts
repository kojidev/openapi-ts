import {Response} from './Response';
import {Reference} from './Reference';

export type Responses = {
    [key: string]: Response | Reference;
}
