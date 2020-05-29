import { AllowRef } from '../src/utils';
import { Paths } from '../src/schema';
import { bookPaths } from './features/books/bookPaths';

export const paths: AllowRef<Paths> = {
  ...bookPaths,
};
