// http://localhost:8080/api < '/api'
// cors 해결을 위해 proxy로 백엔드 서버 프록시.
const target = 'http://localhost:8080'
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
}
