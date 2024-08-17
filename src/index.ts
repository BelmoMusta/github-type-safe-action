import {ActionBuilder} from "./action-builder";

function main() {
    const actionBuilder = new ActionBuilder();
    const action = actionBuilder
        .name('this is my action')
        .description('this is a description')
        .inputs({
            name: 'input-0',
            defaultValue: undefined,
            description: undefined,
            required: true
        }, {
            name: 'input-1',
            required: true,
            defaultValue: 'nothing'
        })
        .build();

    console.log(action)
}

main();