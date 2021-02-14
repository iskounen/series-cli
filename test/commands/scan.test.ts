import {expect, test} from '@oclif/test'
import * as mock from 'mock-fs'
import * as path from 'path'

describe('scan', () => {
  beforeEach(() => {
    mock({
      'package.json': mock.load(path.resolve(__dirname, '../../package.json')),
      'tsconfig.json': mock.load(path.resolve(__dirname, '../../tsconfig.json')),
      // eslint-disable-next-line quote-props
      'src': mock.load(path.resolve(__dirname, '../../src')),
      // eslint-disable-next-line quote-props
      'node_modules': mock.load(path.resolve(__dirname, '../../node_modules')),
      'foo.txt': 'foo',
      'bar.txt': 'bar',
      'baz.txt': 'baz',
    })
  })

  afterEach(() => {
    mock.restore()
  })

  test
  .stdout()
  .command(['scan'])
  .it('lists the contents of the current directory', ctx => {
    expect(ctx.stdout).to.contain('foo.txt')
    expect(ctx.stdout).to.contain('bar.txt')
    expect(ctx.stdout).to.contain('baz.txt')
  })
})
