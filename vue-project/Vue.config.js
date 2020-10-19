// vue.config.js
module.exports = {
    chainWebpack: config => {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch')
    }
  }