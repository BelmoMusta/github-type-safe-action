import {Action} from "../src/action/action";
import YAML from 'yaml';
import * as fs from "fs";

describe('Index tests', function () {
    it('should create a js action', function () {
        const jsAction: Action = {
            name: 'action name',
            description: 'action description',
            runs: {
                using: 'node20',
                main: 'test.js',
            },
        };
        const buffer: Buffer = fs.readFileSync('__tests__/js-action.yml');
        const expected = buffer.toString('utf-8');
        const actual = YAML.stringify(jsAction);

        expect(actual).toBe(expected);
    });
    it('should create a composite action', function () {
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
                        run: 'echo 1\ntwo\nthree',
                        shell: "bash"
                    }, {
                        uses: "actions/first-interaction@v1",
                        id: '2',
                        "continue-on-error": true,
                        "working-directory":'.'
                    }
                ],
            },
        };
        const buffer: Buffer = fs.readFileSync('__tests__/composite-action.yml');
        const expected = buffer.toString('utf-8');
        const actual = YAML.stringify(compositeAction);
        expect(actual).toBe(expected);
    });
    it('should create a docker action', function () {
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
                using: 'docker',
                image:'alpine:18',
                entrypoint: 'bash -c ls -a /'
            },
        };
        const buffer: Buffer = fs.readFileSync('__tests__/docker-action.yml');
        const expected = buffer.toString('utf-8');
        const actual = YAML.stringify(compositeAction);
        expect(actual).toBe(expected);
    });});