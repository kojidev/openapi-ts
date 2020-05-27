import {Response} from './Response';
import {Reference} from './Reference';

export interface Responses {
    [key: string]: Response | Reference;
}
