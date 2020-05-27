import { Schema } from './Schema';
import { Reference } from './Reference';
import { Response } from './Response';
import { Parameter } from './Parameter';
import { RequestBody } from './RequestBody';
import { Callback } from './Callback';
import { Example } from './Example';
import { Header } from './Header';
import { Link } from './Link';
import { SecurityScheme } from './SecurityScheme';

export interface Components {
  callbacks?: { [key: string]: Callback | Reference; };
  examples?: { [key: string]: Example | Reference; };
  headers?: { [key: string]: Header | Reference; };
  links?: { [key: string]: Link | Reference; };
  parameters?: { [key: string]: Parameter | Reference; };
  requestBodies?: { [key: string]: RequestBody | Reference; };
  responses?: { [key: string]: Response | Reference; };
  schemas?: { [key: string]: Schema | Reference; };
  securitySchemes?: { [key: string]: SecurityScheme | Reference; };
}
