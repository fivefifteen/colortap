import { babel } from '@rollup/plugin-babel'

const config = {
  input: 'src/colortap.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'colortap',
    sourcemap: true
  },
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config
