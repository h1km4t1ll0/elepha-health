module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"]
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       root: './src',
    //       alias: {
    //         pages: './src/pages',
    //         entities: './src/entities',
    //         features: './src/features',
    //         shared: './src/shared',
    //         widgets: './src/widgets',
    //         app: './src/app',
    //       },
    //     },
    //   ],
    // ],
  };
};
