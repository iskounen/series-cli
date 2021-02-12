import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import * as path from 'path'

export default class Seq extends Command {
  static description = 'renames jpg files to be sequential'

  static flags = {
    preview: flags.boolean({char: 'p'}),
  }

  rename = (file: string, index: number) => `${index + 1}${path.extname(file)}`

  async run() {
    const {flags} = this.parse(Seq)

    const files = fs.readdirSync('.').filter(file => path.extname(file) === '.jpg').sort()

    if (flags.preview) {
      this.log(files.map((file, index) => `${file} => ${this.rename(file, index)}`).join('\n'))
    } else {
      fs.mkdirSync('tmp')
      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      files.forEach((file, index) => fs.copyFileSync(file, `tmp/${this.rename(file, index)}`))
    }
  }
}
