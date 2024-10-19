import YAML from 'yaml';
import * as fs from "fs";
import {Workflow} from "../src/workflow/workflow";

describe('Index tests', function () {
    it('should create a workflow', function () {
        const workflow: Workflow = {
            name: 'workflow-1',
            on: {
                discussion_comment: {
                    types: ["created", "edited"],
                },

                pull_request: {
                    types: ['opened', 'unlocked', 'opened', 'review_requested'],
                    branches:['master'],
                    paths: []
                },
                workflow_dispatch: {}
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
        const buffer: Buffer = fs.readFileSync('__tests__/workflow.yml');
        const expected = buffer.toString('utf-8');
        const actual = YAML.stringify(workflow);

        expect(actual).toBe(expected);
    });
});