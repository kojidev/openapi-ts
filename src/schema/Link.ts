import { Server } from './Server';

export interface Link {
  description?: string;
  operationId?: string;
  operationRef?: string;
  parameters?: { [key: string]: string | any; };
  requestBody?: string | any;
  server?: Server;
}
