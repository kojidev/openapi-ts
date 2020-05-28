import { MediaType } from './MediaType';

export interface Response {
  content?: { [key: string]: MediaType };
  description: string;
}
