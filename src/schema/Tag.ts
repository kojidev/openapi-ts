import {ExternalDocumentation} from './ExternalDocumentation';

export type Tag = {
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
}
