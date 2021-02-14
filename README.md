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
* [`series help [COMMAND]`](#series-help-command)
* [`series scan`](#series-scan)
* [`series seq`](#series-seq)

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

## `series scan`

```
USAGE
  $ series scan
```

_See code: [src/commands/scan.ts](https://github.com/iskounen/series-cli/blob/v0.0.0/src/commands/scan.ts)_

## `series seq`

renames jpg files to be sequential

```
USAGE
  $ series seq

OPTIONS
  -p, --preview
```

_See code: [src/commands/seq.ts](https://github.com/iskounen/series-cli/blob/v0.0.0/src/commands/seq.ts)_
<!-- commandsstop -->
