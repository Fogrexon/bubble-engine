import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import image from '@rollup/plugin-image';

const extensions = ['.ts', '.js'];

const LIBRARY_NAME = 'BubbleEngine';
const LIBRARY_NAME_LOWER = LIBRARY_NAME.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).slice(1);

export default [

  {
    input: 'src/index.ts',

    preserveModules: true,

    output: {
      dir: 'build/commonjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      nodeResolve({browser: true}),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/commonjs',
      }),
      image(),
    ],
  },

  {
    input: 'src/index.ts',
    preserveModules: true,
    output: {
      dir: 'build/es',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      nodeResolve({browser: true}),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/es',
      }),
      image(),
    ],
  },

  {
    input: 'src/index.ts',
    output: {
      file: `build/umd/${LIBRARY_NAME_LOWER}.js`,
      // dir: 'build/umd',
      format: 'umd',
      name: LIBRARY_NAME,
      sourcemap: true,
    },
    plugins: [
      nodeResolve({browser: true}),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/umd',
      }),
      image(),
    ],
  },
];
