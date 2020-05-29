import * as fs from 'fs';
import * as path from 'path';
import {
  Components,
  OpenAPI,
  openapi,
} from '../src/schema';
import { title } from './title';
import { version } from './version';
import { resolveRefs } from '../src/utils/ref';
import { paths } from './paths';

const description = fs
  .readFileSync(path.resolve(__dirname, 'description.md'))
  .toString();

const components: Components = {};

export const acmeSpec: OpenAPI = {
  components,
  info: {
    description,
    title,
    version,
  },
  openapi,
  paths: resolveRefs(paths, components),
};
