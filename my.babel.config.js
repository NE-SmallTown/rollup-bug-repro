module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: false,
        targets: {
          node: '10',
        },
      },
    ],

    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',

    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
        helpers: false,
        regenerator: true,
        useESModules: false,
      },
    ],
  ],
};
