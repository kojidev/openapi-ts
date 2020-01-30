import {Schema} from './Schema';

type ParameterIn = 'query' | 'header' | 'path' | 'cookie';

export type Parameter = {
    name: string;
    in: ParameterIn;
    description?: string;
    required?: boolean;
    schema: Schema;
}
