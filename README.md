series-cli
==========

Utility to perform tasks for the series-api

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/series-cli.svg)](https://npmjs.org/package/series-cli)
[![Downloads/week](https://img.shields.io/npm/dw/series-cli.svg)](https://npmjs.org/package/series-cli)
[![License](https://img.shields.io/npm/l/series-cli.svg)](https://github.com/iskounen/series-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g series-cli
$ series COMMAND
running command...
$ series (-v|--version|version)
series-cli/0.0.0 darwin-x64 node-v12.20.1
$ series --help [COMMAND]
USAGE
  $ series COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`series hello [FILE]`](#series-hello-file)
* [`series help [COMMAND]`](#series-help-command)

## `series hello [FILE]`

describe the command here

```
USAGE
  $ series hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ series hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/iskounen/series-cli/blob/v0.0.0/src/commands/hello.ts)_

## `series help [COMMAND]`

display help for series

```
USAGE
  $ series help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
