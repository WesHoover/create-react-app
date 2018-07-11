module.exports = {
  components: 'src/components/**/*.js',
  template: {
    head: {
      links: [
          {
            rel: 'stylesheet',
            href:
              'src/app.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://cloud.typography.com/6564134/6512772/css/fonts.css'
          }
        ]
      }
    },
  webpackConfig: {
    module: {
      rules: [        
        {        
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};
