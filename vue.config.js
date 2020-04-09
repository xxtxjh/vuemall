module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
      
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
        'store':'@/store'
        
      }
    }
  }
}
