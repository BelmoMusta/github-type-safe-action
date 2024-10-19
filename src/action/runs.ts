import {StepRunShell, StepUses} from "./step";
import {KeyValue} from "./key-value";

interface CommonStep {
    /**
     * Allows you to define conditions for the `pre:` action execution. The `pre:` action will only run
     * if the conditions in `pre-if` are met. If not set, then `pre-if` defaults to `always()`.
     * Note that the `step` context is unavailable, as no steps have run yet.
     */
    'pre-if'?: string;
    /**
     * Allows you to define conditions for the `post:` action execution. The `post:` action will only run if
     * the conditions in `post-if` are met. If not set, then `post-if` defaults to `always()`.
     */
    "post-if"?: string;
}

/**
 * Configures the path to the action's code and the application used to execute the code.
 */
export interface RunsJavascript extends CommonStep {
    /**
     * The application used to execute the code specified in `main`.
     */
    using: 'node12' | 'node16' | 'node20';
    /**
     * The file that contains your action code. The application specified in `using` executes this file.
     */
    main: string;
    /**
     * Allows you to run a script at the start of a job, before the `main:` action begins. For example, you can use `pre:` to run a prerequisite setup script. The application specified with the `using` syntax will execute this file. The `pre:` action always runs by default, but you can override this using `pre-if`.
     */
    pre?: string;
    /**
     * Allows you to run a script at the end of a job, once the `main:` action has completed. For example, you can use `post:` to terminate certain processes or remove unneeded files. The application specified with the `using` syntax will execute this file. The `post:` action always runs by default, but you can override this using `post-if`.
     */
    post?: string;
}

/**
 * Configures the path to the composite action, and the application used to execute the code.
 */
export interface RunsComposite {
    /**
     * To use a composite run steps action, set this to 'composite'.
     */
    using: 'composite';
    /**
     * The run steps that you plan to run in this action.
     */
    steps: (StepRunShell | StepUses)[];
}

/**
 * Configures the image used for the Docker action.
 */
export interface RunsDocker extends CommonStep {
    /**
     * You must set this value to 'docker'.
     */
    using: 'docker';
    /**
     * The Docker image to use as the container to run the action.
     * The value can be the Docker base image name, a local `Dockerfile` in your repository,
     * or a public image in Docker Hub or another registry.
     * To reference a `Dockerfile` local to your repository, use a path relative to your action metadata file.
     * The `docker` application will execute this file.
     */
    image: string;
    /**
     * Specifies a key/value map of environment variables to set in the container environment.
     */
    env?: KeyValue;
    /**
     * Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified.
     * Use `entrypoint` when the `Dockerfile` does not specify an `ENTRYPOINT`
     * or you want to override the `ENTRYPOINT` instruction.
     * If you omit `entrypoint`, the commands you specify in the Docker `ENTRYPOINT` instruction will execute.
     * The Docker `ENTRYPOINT instruction has a *shell* form and *exec* form.
     * The Docker `ENTRYPOINT` documentation recommends using the *exec* form of the `ENTRYPOINT` instruction.
     */
    entrypoint?: string;
    /**
     * Allows you to run a script before the `entrypoint` action begins.
     * For example, you can use `pre-entrypoint:` to run a prerequisite setup script.
     * GitHub Actions uses `docker run` to launch this action, and runs the script inside a new container that uses
     * the same base image. This means that the runtime state is different from the main `entrypoint` container,
     * and any states you require must be accessed in either the workspace, `HOME`, or as a `STATE_` variable.
     * The `pre-entrypoint:` action always runs by default, but you can override this using `pre-if`.
     */
    'pre-entrypoint'?: string;
    /**
     * Allows you to run a cleanup script once the `runs.entrypoint` action has completed.
     * GitHub Actions uses `docker run` to launch this action. Because GitHub Actions runs the script inside
     * a new container using the same base image, the runtime state is different from the main `entrypoint` container. You can access any state you need in either the workspace, `HOME`, or as a `STATE_` variable.
     * The `post-entrypoint:` action always runs by default, but you can override this using `post-if`.
     */
    "post-entrypoint"?: string;
    /**
     * An array of strings that define the inputs for a Docker container. Inputs can include hardcoded strings.
     * GitHub passes the `args` to the container's `ENTRYPOINT` when the container starts up.
     * The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`,
     * use the guidelines ordered by preference:
     * - Document required arguments in the action's README and omit them from the `CMD` instruction.
     * - Use defaults that allow using the action without specifying any `args`.
     * - If the action exposes a `--help` flag, or something similar, use that to make your action self-documenting.
     */
    args?: string[];
}