import {ExpressionSyntax} from "./expressionSyntax";

export interface Concurrency {
    /**
     * When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be pending. Any previously pending job or workflow in the concurrency group will be canceled.
     */
    group: string;
    /**
     * To cancel any currently running job or workflow in the same concurrency group, specify cancel-in-progress: true.
     */
    "cancel-in-progress"?: boolean | ExpressionSyntax;
}