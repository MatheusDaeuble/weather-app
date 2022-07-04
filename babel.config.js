/* eslint-disable @typescript-eslint/no-unsafe-call */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            config: './src/config',
            ui: './src/ui',
            assets: './src/assets',
            contexts: './src/contexts',
            hoc: './src/hoc',
            screens: './src/screens',
            hooks: './src/hooks',
            services: './src/services',
            util: './src/util',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
