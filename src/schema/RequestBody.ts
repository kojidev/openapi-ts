import { MediaType } from './MediaType';

export interface RequestBody {
  content: { [mimeType: string]: MediaType; };
  description?: string;
  required?: boolean;
}
