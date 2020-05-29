# OpenAPI TS
Library that helps to write OpenAPI documentation
in more safe & easy way than with yaml.

## How exactly does it ease maintainability?
### Type safety
- One wrong indentation in yaml and you screwed.
- Misspelled something or forgot a required field?
  Let's hope rendering library catches that, if not frontend developers will.

### Code reuse
- Have you ever done that?
  ```
  { $ref: '#/components/Thing/propertis/name' }
  ```
  I bet that scaled well. Just use regular import/export const instead.
- Found yourself hacking around trying to reduce boilerplate code,
  for example adding 401 response to every operation that has security entry?

  Had to parse yaml, manipulate it then encode back?

  Nothing could be easier than manipulating JS object.

### Reference management
- Maintaining $refs manually is pain. This library provides a way for you
  to reference necessary schemas, and it will put them in `components`.
- Detects circular references for you.

TODO: draft
## Project structure

 - `src/schema` - contains OpenAPI compatible types,
    interfaces and constants.
 - `src/utils` - contains set of utility functions & types
    that ease the process of writing documentation.

TODO: Figure out if inlineRef is something to keep.
