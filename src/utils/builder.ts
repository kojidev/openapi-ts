import { OpenAPI, openApiVersion } from '../schema/OpenAPI';
import { Info } from '../schema/Info';
import { Paths } from '../schema/Paths';
import { AllowRef, resolveRefs } from './ref';
import { Components } from '../schema/Components';

export function NewOpenAPI(): Builder {
  return new Builder();
}

export class Builder {
  private info?: Info;
  private paths: AllowRef<Paths> = {};

  setInfo(info: Info): Builder {
    this.info = info;

    return this;
  }

  addPaths(paths: AllowRef<Paths>): Builder {
    this.paths = { ...this.paths, ...paths }

    return this;
  }

  build(): OpenAPI {
    if (this.info === undefined) {
      throw new Error('Provide info.');
    }

    if (Object.keys(this.paths).length === 0) {
      throw new Error('Add paths.');
    }

    // Check for circular references

    const components: Components = {};

    const paths = resolveRefs(this.paths, components);

    const openapi: OpenAPI = {
      openapi: openApiVersion,
      info: this.info,
      paths,
      components,
    };

    // Check for circular json references

    return openapi
  }
}
