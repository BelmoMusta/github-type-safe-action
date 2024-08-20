import {Action} from "./action";
import YAML from 'yaml';

function main() {
    const jsAction: Action = {
        name: 'action name',
        description: 'action description',
        runs: {
            using: 'node20',
            main: 'test.js',
        },
    };

    const compositeAction: Action = {
        name: 'action name',
        description: 'action description',
        inputs: {
            'input-0': {
                default: 'default-value',
                description: 'description',
                required: true
            },
            'input-1': {
                description: 'input-1 description',
                required: true,
                default: 'nothing'
            }
        },
        outputs: {
            'output-0': {
                description: 'output-0 description',
                value: 'a simple value for output-0'
            }
        },
        runs: {
            using: 'composite',
            steps: [
                {
                    name: 'step-0',
                    id: 'step-00-id',
                    "continue-on-error": false,
                    "working-directory": '.',
                    if: 'true',
                    env: {
                        'KEY': 'test',
                        'PROPERTY': 'value'
                    },
                    run: 'echo 1\n tlata rb3a khmsa \n setta',
                    shell: "bash"
                }
            ],
        },
    };
    const jsActionAsYaml = YAML.stringify(jsAction);
    const compositeActionAsYaml = YAML.stringify(compositeAction);
    console.log(jsActionAsYaml);
    console.log(compositeActionAsYaml);
}

main();