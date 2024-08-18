import {Action} from "./action-type";

function main() {
    const action_: Action = {
        name: 'action name',
        description: 'action description',
        inputs: [{
            name: 'input-0',
            defaultValue: 'default-value',
            description: 'description',
            required: true
        }, {
            name: 'input-1',
            description: 'input-1 description',
            required: true,
            defaultValue: 'nothing'
        }],
        outputs: [{
            name: 'output-0',
            description: 'output-0 description',
            value: 'a simple value for output-0'
        }],
        runs: {
            using: 'node20',
            main:'test.js'
        },
    };
    console.log(action_)
}

main();