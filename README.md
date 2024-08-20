# Type Safe GitHub actions Creator
This repository contains the type-safe code to create GitHub Actions `action.yml` files.

This is done by defining types of possible objects/values that are allowed for each use case, using the `TypeScript`
capability to pre-compile the created objects, and then converting them to proper `YAML` files. 

## Examples of use :
### Normal case: 

```typescript
import {Action} from "./action";
import YAML from 'yaml';
const jsAction: Action = {
        name: 'action name',
        description: 'action description',
        inputs: {
            'input-0': {
                default: 'default-value',
                description: 'description',
                required: true,
            },
            out: {
                description: 'input-1 description',
                default: 'nothing'
            }
        },
        outputs: {
            out: {
                description: 'output-0 description',
                value: 'a simple value for output-0'
            }
        },
        runs: {
            using: 'node20',
            main: 'test.js',
        },
    };
const jsActionAsYaml = YAML.stringify(jsAction);
console.log(jsActionAsYaml)
```

That will output
```yaml
name: action name
description: action description
inputs:
  input-0:
    default: default-value
    description: description
    required: true
  out:
    description: input-1 description
    default: nothing
outputs:
  out:
    description: output-0 description
    value: a simple value for output-0
runs:
  using: node20
  main: test.js
```

### Erroneous case:
If a mistake is made when creating the action object, the typescript compilation phase will detect it:

```typescript
 const jsAction: Action = {
        //name: 'action name', // required property 'name' is not provided
        description: 'action description',
        runs: {
            using: 'node20',
            main: 'test.js',
        },
    };
const jsActionAsYaml = YAML.stringify(jsAction);
console.log(jsActionAsYaml)
```
Compiling will produce an error : 

```shell
./type-script-action (main*) » tsc
src/index.ts:5:11 - error TS2741: Property 'name' is missing in type '{ description: string; runs: { using: "node20"; main: string; }; }' but required in type 'Action'.

5     const jsAction: Action = {
            ~~~~~~~~

  src/action.ts:13:5
    13     name: string;
           ~~~~
    'name' is declared here.

Found 1 error in src/index.ts:5

```

### TODOS

- Publish to npm
- Implement unit tests
- Create TypeSafety for workflows
- ...