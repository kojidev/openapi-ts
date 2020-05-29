import { MediaType } from './MediaType';
import { Header } from './Header';
import { Reference } from './Reference';
import { Link } from './Link';

export interface Response {
  content?: { [mimeType: string]: MediaType; };
  description: string;
  headers?: { [headerName: string]: string | Header | Reference; };
  links?: { [key: string]: string | Link | Reference; };
}
