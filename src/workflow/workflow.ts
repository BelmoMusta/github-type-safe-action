import {Permissions} from "./events/permissions";
import {Defaults} from "./defaults";
import {Concurrency} from "./concurrency";
import {WorkflowJobs} from "./workflowJobs";
import {WorkflowTriggeringEvent} from "./events/workflowTriggeringEvent";
import {Env} from "./env";

export interface Workflow {
    /**
     * The name of your workflow. GitHub displays the names of your workflows on your repository's actions page. If you omit this field, GitHub sets the name to the workflow's filename.
     */
    name?: string;
    /**
     * The name of the GitHub event that triggers the workflow. You can provide a single event string, array of events, array of event types, or an event configuration map that schedules a workflow or restricts the execution of a workflow to specific files, tags, or branch changes. For a list of available events, see https://help.github.com/en/github/automating-your-workflow-with-github-actions/events-that-trigger-workflows.
     */
    on: WorkflowTriggeringEvent;
    /**
     * To set custom environment variables, you need to specify the variables in the workflow file. You can define environment variables for a step, job, or entire workflow using the jobs.<job_id>.steps[*].env, jobs.<job_id>.env, and env keywords. For more information, see https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv
     */
    env?: Env;
    defaults?: Defaults;
    /**
     * Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can use any context except for the secrets context.
     * You can also specify concurrency at the workflow level.
     * When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be pending. Any previously pending job or workflow in the concurrency group will be canceled. To also cancel any currently running job or workflow in the same concurrency group, specify cancel-in-progress: true.
     */
    concurrency?: string | Concurrency;
    /**
     * A workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the jobs.<job_id>.needs keyword.
     * Each job runs in a fresh instance of the virtual environment specified by runs-on.
     * You can run an unlimited number of jobs as long as you are within the workflow usage limits. For more information, see https://help.github.com/en/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#usage-limits.
     */
    jobs: WorkflowJobs;
    /**
     * The name for workflow runs generated from the workflow. GitHub displays the workflow run name in the list of workflow runs on your repository's 'Actions' tab.
     */
    "run-name"?: string;
    permissions?: Permissions;
}

