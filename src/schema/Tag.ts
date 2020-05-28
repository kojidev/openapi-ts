import { ExternalDocumentation } from './ExternalDocumentation';

export interface Tag {
  description?: string;
  externalDocs?: ExternalDocumentation;
  name: string;
}
