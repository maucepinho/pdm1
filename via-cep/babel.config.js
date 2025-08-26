module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Adicione outras bibliotecas aqui, se tiver...
      'react-native-reanimated/plugin', // Esta linha DEVE ser a última
    ],
  };
};