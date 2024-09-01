import {BranchProtectionRule} from "./branchProtectionRule";
import {CheckRun} from "./checkRun";
import {CheckSuite} from "./checkSuite";
import {GenericType} from "./genericType";
import {Discussion} from "./discussion";
import {DiscussionComment} from "./discussionComment";
import {IssueComment} from "./issueComment";
import {Issues} from "./issues";
import {Label} from "./label";
import {MergeGroup} from "./mergeGroup";
import {Milestone} from "./milestone";
import {Project} from "./project";
import {ProjectCard} from "./projectCard";
import {ProjectColumn} from "./projectColumn";
import {PullRequest} from "./pullRequest";
import {PullRequestReview} from "./pullRequestReview";
import {PullRequestReviewComment} from "./pullRequestReviewComment";
import {PullRequestTarget} from "./pullRequestTarget";
import {Push} from "./push";
import {RegistryPackage} from "./registryPackage";
import {Release} from "./release";
import {EventObject17} from "./eventObject17";

export type WorkflowTriggeringEvent = {
    branch_protection_rule?: BranchProtectionRule;
    check_run?: CheckRun;
    check_suite?: CheckSuite;
    /**
     * Runs your workflow anytime someone creates a branch or tag, which triggers the create event. For information about the REST API, see https://developer.github.com/v3/git/refs/#create-a-reference.
     */
    create?: GenericType;
    /**
     * Runs your workflow anytime someone deletes a branch or tag, which triggers the delete event. For information about the REST API, see https://developer.github.com/v3/git/refs/#delete-a-reference.
     */
    delete?: GenericType;
    /**
     * Runs your workflow anytime someone creates a deployment, which triggers the deployment event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see https://developer.github.com/v3/repos/deployments/.
     */
    deployment?: GenericType;
    /**
     * Runs your workflow anytime a third party provides a deployment status, which triggers the deployment_status event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see https://developer.github.com/v3/repos/deployments/#create-a-deployment-status.
     */
    deployment_status?: GenericType;
    discussion?: Discussion;
    discussion_comment?: DiscussionComment;
    /**
     * Runs your workflow anytime when someone forks a repository, which triggers the fork event. For information about the REST API, see https://developer.github.com/v3/repos/forks/#create-a-fork.
     */
    fork?: GenericType;
    /**
     * Runs your workflow when someone creates or updates a Wiki page, which triggers the gollum event.
     */
    gollum?: GenericType;
    issue_comment?: IssueComment;
    issues?: Issues;
    label?: Label;
    merge_group?: MergeGroup;
    milestone?: Milestone;
    /**
     * Runs your workflow anytime someone pushes to a GitHub Pages-enabled branch,
     * which triggers the page_build event. For information about the REST API,
     * see https://developer.github.com/v3/repos/pages/.
     */
    page_build?: GenericType;
    project?: Project;
    project_card?: ProjectCard;
    project_column?: ProjectColumn;
    /**
     * Runs your workflow anytime someone makes a private repository public, which triggers the public event. For information about the REST API, see https://developer.github.com/v3/repos/#edit.
     */
    public?: GenericType;
    pull_request?: PullRequest;
    pull_request_review?: PullRequestReview;
    pull_request_review_comment?: PullRequestReviewComment;
    pull_request_target?: PullRequestTarget;
    push?: Push;
    registry_package?: RegistryPackage;
    release?: Release;
    /**
     * Runs your workflow anytime the status of a Git commit changes, which triggers the status event. For information about the REST API, see https://developer.github.com/v3/repos/statuses/.
     */
    status?: GenericType;
    /**
     * Runs your workflow anytime the watch event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/activity/starring/.
     */
    watch?: GenericType;
    /**
     * Allows workflows to be reused by other workflows.
     */
    workflow_call?: {
        /**
         * When using the workflow_call keyword, you can optionally specify inputs that are passed to the called workflow from the caller workflow.
         */
        inputs?: {
            /**
             * A string identifier to associate with the input. The value of <input_id> is a map of the input's metadata. The <input_id> must be a unique identifier within the inputs object. The <input_id> must start with a letter or _ and contain only alphanumeric characters, -, or _.
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
             */
            [k: string]: {
                /**
                 * A string description of the input parameter.
                 */
                description?: string;
                /**
                 * A string shown to users using the deprecated input.
                 */
                deprecationMessage?: string;
                /**
                 * A boolean to indicate whether the action requires the input parameter. Set to true when the parameter is required.
                 */
                required?: boolean;
                /**
                 * Required if input is defined for the on.workflow_call keyword. The value of this parameter is a string specifying the data type of the input. This must be one of: boolean, number, or string.
                 */
                type: "boolean" | "number" | "string";
                /**
                 * The default value is used when an input parameter isn't specified in a workflow file.
                 */
                default?: boolean | number | string;
            };
        };
        /**
         * A map of the secrets that can be used in the called workflow. Within the called workflow, you can use the secrets context to refer to a secret.
         */
        secrets?: {
            /**
             * A string identifier to associate with the secret.
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
             */
            [k: string]: {
                /**
                 * A string description of the secret parameter.
                 */
                description?: string;
                /**
                 * A boolean specifying whether the secret must be supplied.
                 */
                required: boolean;
            };
        };
        [k: string]: unknown;
    };
    /**
     * You can now create workflows that are manually triggered with the new workflow_dispatch event. You will then see a 'Run workflow' button on the Actions tab, enabling you to easily trigger a run.
     */
    workflow_dispatch?: {
        /**
         * Input parameters allow you to specify data that the action expects to use during runtime. GitHub stores input parameters as environment variables. Input ids with uppercase letters are converted to lowercase during runtime. We recommended using lowercase input ids.
         */
        inputs?: {
            /**
             * A string identifier to associate with the input. The value of <input_id> is a map of the input's metadata. The <input_id> must be a unique identifier within the inputs object. The <input_id> must start with a letter or _ and contain only alphanumeric characters, -, or _.
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
             */
            [k: string]: GenericType;
        };
    };
    workflow_run?: EventObject17;
    /**
     * You can use the GitHub API to trigger a webhook event called repository_dispatch when you want to trigger a workflow for activity that happens outside of GitHub. For more information, see https://developer.github.com/v3/repos/#create-a-repository-dispatch-event.
     * To trigger the custom repository_dispatch webhook event, you must send a POST request to a GitHub API endpoint and provide an event_type name to describe the activity type. To trigger a workflow run, you must also configure your workflow to use the repository_dispatch event.
     */
    repository_dispatch?: GenericType;
    /**
     * You can schedule a workflow to run at specific UTC times using POSIX cron syntax (https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Scheduled workflows run on the latest commit on the default or base branch. The shortest interval you can run scheduled workflows is once every 5 minutes.
     * Note: GitHub Actions does not support the non-standard syntax @yearly, @monthly, @weekly, @daily, @hourly, and @reboot.
     * You can use crontab guru (https://crontab.guru/). to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of crontab guru examples (https://crontab.guru/examples.html).
     *
     * @minItems 1
     */
    schedule?: [
        {
            cron?: string;
        },
        ...{
            cron?: string;
        }[]
    ];
};