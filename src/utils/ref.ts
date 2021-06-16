import { Schema } from '../schema/Schema';
import { Reference } from '../schema/Reference';
import {
  Parameter,
  RequestBody,
  Response,
} from '../schema';

export class ReferableComponents {
  private schemas: { [title: string]: Schema } = {};

  private responses: { [title: string]: Response } = {};

  private parameters: { [title: string]: Parameter } = {};

  private requestBodies: { [title: string]: RequestBody } = {};

  public schema = (title: string, schema: Schema): Reference => {
    this.schemas[title] = schema;

    return {
      $ref: `#/components/schemas/${title}`,
    };
  };

  public response = (title: string, response: Response): Reference => {
    this.responses[title] = response;

    return {
      $ref: `#/components/responses/${title}`,
    };
  };

  public parameter = (title: string, parameter: Parameter): Reference => {
    this.parameters[title] = parameter;

    return {
      $ref: `#/components/parameters/${title}`,
    };
  };

  public requestBody = (title: string, requestBody: RequestBody): Reference => {
    this.requestBodies[title] = requestBody;

    return {
      $ref: `#/components/requestBodies/${title}`,
    };
  };

  public getAllSchemas = () => this.schemas;

  public getAllResponses = () => this.responses;

  public getAllParameters = () => this.parameters;

  public getAllRequestBodies = () => this.requestBodies;
}
