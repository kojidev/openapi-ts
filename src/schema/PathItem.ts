import {Operation} from './Operation';

export interface PathItem {
    get?: Operation;
    post?: Operation;
}
