const HOST_WEAPP = '"http://127.0.0.1"';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST_URL: HOST_WEAPP
  },
  mini: {
    devServer: {
      proxy: {
        '/api/': {
          target: JSON.parse(HOST_WEAPP),
          pathRewrite: {
            '^/api/': '/api/'
          },
          changeOrigin: true
        }
      }
    }
  },
  h5: {}
};
