const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const commonjs = require('@rollup/plugin-commonjs');
const nodePolyfills = require('rollup-plugin-node-polyfills');
const path = require('path');
const rollup = require('rollup');

const makeExternalPredicate = (packageExternalArr) => {
  if (packageExternalArr.length === 0) {
    return () => false;
  }

  const pattern = new RegExp(`^(${packageExternalArr.join('|')})($|/)`);

  return id => {
    console.log(12312321, id, pattern, pattern.test((id)));
    return pattern.test(id)
  };
};

async function build () {
  const userPackageJSON = require('./package.json');

  const userPackageExternal = [
    ...Object.keys(userPackageJSON.peerDependencies || {}),
    ...Object.keys(userPackageJSON.dependencies || {}),
  ];

  const rollupConfig = {
    inputOptions: {
      input: path.resolve(__dirname, 'src/foo.js'),
      plugins: [
        babel({
          configFile: path.resolve(__dirname, 'my.babel.config.js'),
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
        nodePolyfills(),
      ],
      external: makeExternalPredicate(userPackageExternal),
    },

    outputOptions: {
      file: path.resolve(__dirname, 'output.js'),
      format: 'cjs',
      exports: 'auto',
    },
  };

  const { inputOptions, outputOptions } = rollupConfig;
  const bundle = await rollup.rollup(inputOptions);

  await bundle.write(outputOptions);
}

build();
