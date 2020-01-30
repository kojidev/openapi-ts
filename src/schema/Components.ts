import { Schema } from './Schema';
import { Reference } from './Reference';
import { Response } from './Response';
import { Parameter } from './Parameter';

export type Components = {
  schemas: { [key: string]: Schema | Reference; };
  responses: { [key: string]: Response | Reference; };
  parameters: { [key: string]: Parameter | Reference; };
}
