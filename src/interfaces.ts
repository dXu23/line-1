import * as Line from "../mod.ts";

export interface ICommand {
  signature: string;
  subcommands: typeof Line.Subcommand[];
  arguments: { [k: string]: string };
  options: { [k: string]: string };
  options_parsed: string[];
  takes_args: boolean;
  cli: Line.Cli;
  handle?: () => void;
  setUp?: () => void;
}

/**
 * The options that can be passed into the CLI.
 *
 * name
 *     The CLI's name.
 *
 * description
 *     The CLI's description.
 *
 * version
 *     The CLI's version.
 *
 * command
 *     The main command.
 */
export interface ICliOptions {
  name: string;
  description: string;
  version: string;
  command: typeof Line.Command;
}
