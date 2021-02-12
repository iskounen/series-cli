import {Command} from '@oclif/command'
import * as fs from 'fs'

export default class Scan extends Command {
  async run() {
    this.log(fs.readdirSync('.').join())
  }
}
