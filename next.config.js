const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config()

console.log('database host:', process.env.DATABASE_HOST);
console.log('database port:', process.env.DATABASE_PORT);
console.log('database user:', process.env.DATABASE_USER);
console.log('database pass:', process.env.DATABASE_PASS);
console.log('database name:', process.env.DATABASE_NAME);

module.exports = {
    reactStrictMode: true,
    webpack5: false,
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    }
  }