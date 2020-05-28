import { ServerVariable } from './ServerVariable';

export interface Server {
  description?: string;
  url: string;
  variables?: { [key: string]: ServerVariable }
}
