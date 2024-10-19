export interface Container {
    /**
     * The Docker image to use as the container to run the action. The value can be the Docker Hub image name or a registry name.
     */
    image: string;
    /**
     * If the image's container registry requires authentication to pull the image, you can use credentials to set a map of the username and password. The credentials are the same values that you would provide to the `docker login` command.
     */
    credentials?: {
        username?: string;
        password?: string;

    };
    /**
     * Sets an array of environment variables in the container.
     */
    env?:
        | {
        [k: string]: string | number | boolean;
    }
        | string;
    /**
     * Sets an array of ports to expose on the container.
     *
     * @minItems 1
     */
    ports?: [number | string, ...(number | string)[]];
    /**
     * Sets an array of volumes for the container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.
     * To specify a volume, you specify the source and destination path: <source>:<destinationPath>
     * The <source> is a volume name or an absolute path on the host machine, and <destinationPath> is an absolute path in the container.
     *
     * @minItems 1
     */
    volumes?: [string, ...string[]];
    /**
     * Additional Docker container resource options. For a list of options, see https://docs.docker.com/engine/reference/commandline/create/#options.
     */
    options?: string;
}