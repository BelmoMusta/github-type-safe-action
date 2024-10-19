import {Workflow} from "../workflow/workflow";
import YAML from "yaml";

const workflow: Workflow = {
    name: 'workflow-1',
    on: {
        discussion_comment: {
            types: ["created", "edited"],
        },

        pull_request: {
            types: ['opened', 'unlocked', 'review_requested'],
            branches: ['master'],
            paths: []
        },
        push: {
            branches: ['master'],
            tags: ['v*']
        },
        workflow_dispatch: {
            inputs: {
                'hi': {
                    description: 'this is an input to launch the workflow',
                    type: 'choice',
                    options: ['test', 'build']
                },
                'hello': {
                    description: 'I dont know'
                }
            }
        }
    },
    jobs: {
        'nice-job': {
            name: 'job-1',
            "runs-on": 'ubuntu-latest',
            steps: [
                {
                    name: 'step-1',
                    id: 'id-0',
                    shell: 'bash',
                    run: 'echo 1'
                }
            ]
        }
    },
};

const actual = YAML.stringify(workflow);
console.log(actual)