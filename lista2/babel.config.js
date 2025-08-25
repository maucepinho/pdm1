module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Importante: reanimated/plugin deve ser o ÚLTIMO plugin da lista.
      'react-native-reanimated/plugin',
    ],
  };
};