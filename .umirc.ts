import { defineConfig } from 'umi';
import HttpProxyAgent from 'https-proxy-agent'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    '/api/': {
      target: 'http://10.123.138.132:8081',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      agent: HttpProxyAgent(process.env.http_proxy  || 'http://127.0.0.1:8989'),
    },
  }
});
