import {expect, test} from '@oclif/test'
import * as fs from 'fs'
import * as mock from 'mock-fs'
import * as path from 'path'

describe('seq', () => {
  beforeEach(() => {
    mock({
      'package.json': mock.load(path.resolve(__dirname, '../../package.json')),
      'tsconfig.json': mock.load(path.resolve(__dirname, '../../tsconfig.json')),
      // eslint-disable-next-line quote-props
      'src': mock.load(path.resolve(__dirname, '../../src')),
      // eslint-disable-next-line quote-props
      'node_modules': mock.load(path.resolve(__dirname, '../../node_modules')),
      '001.jpg': Buffer.from('FFDBFF01FFD9', 'hex'),
      '002.jpg': Buffer.from('FFDBFF02FFD9', 'hex'),
      '003.jpg': Buffer.from('FFDBFF03FFD9', 'hex'),
    })
  })

  afterEach(() => {
    mock.restore()
  })

  test
  .stdout()
  .command(['seq', '--preview'])
  .it('previews each jpg file to be renamed', ctx => {
    expect(ctx.stdout).to.contain('001.jpg => 1.jpg')
    expect(ctx.stdout).to.contain('002.jpg => 2.jpg')
    expect(ctx.stdout).to.contain('003.jpg => 3.jpg')
  })

  test
  .stdout()
  .command(['seq'])
  .it('creates a tmp directory', () => {
    expect(fs.existsSync('tmp')).to.be.true
  })

  test
  .stdout()
  .command(['seq'])
  .it('renames and copies jpg files to tmp directory', () => {
    expect(fs.existsSync('tmp/1.jpg')).to.be.true
    expect(fs.readFileSync('tmp/1.jpg')).to.deep.equal(Buffer.from('FFDBFF01FFD9', 'hex'))
    expect(fs.existsSync('tmp/2.jpg')).to.be.true
    expect(fs.readFileSync('tmp/2.jpg')).to.deep.equal(Buffer.from('FFDBFF02FFD9', 'hex'))
    expect(fs.existsSync('tmp/3.jpg')).to.be.true
    expect(fs.readFileSync('tmp/3.jpg')).to.deep.equal(Buffer.from('FFDBFF03FFD9', 'hex'))
  })
})
