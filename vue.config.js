const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/variables.less')]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // target: process.env.NODE_ENV === 'production' ? 'http://zh.tbshou.com' : 'http://wisdom_project.yxsoft.net',
        target: 'http://dev.yituoke.ac.cn',
        changeOrigin: true, // 是否跨域
        ws: true,
        pathRewrite: {
          // 重写路径
          '^/api': ''
        }
      }
    }
  }
};