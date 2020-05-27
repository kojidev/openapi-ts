import { Reference } from './Reference';
import { Header } from './Header';

export interface Encoding {
  allowReserved: boolean;
  contentType?: string;
  headers?: { [key: string]: string | Header | Reference; };
}
