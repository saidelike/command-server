import CommandRunner from "../commandRunner";

/**
 * This is the `commandRunner` singleton
 */
let cmdRunner_: CommandRunner | undefined;

/**
 * Injects an {@link CommandRunner} object that can be used to issue commands.
 * This function should only be called from a select few places, eg extension
 * activation or when mocking a test.
 * @param commandRunner The CommandRunner to inject
 */
export function injectCommandRunner(cmdRunner: CommandRunner | undefined) {
  cmdRunner_ = cmdRunner;
}

/**
 * Gets the singleton used to issue commands.
 * @throws Error if the commandRunner hasn't been injected yet.  Can avoid this by
 * constructing your objects lazily
 * @returns The commandRunner object
 */
export function commandRunner(): CommandRunner {
  if (cmdRunner_ == null) {
    throw Error("Tried to access CommandRunner before it was injected");
  }

  return cmdRunner_;
}