module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', { modules: false }]],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    test: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
}
