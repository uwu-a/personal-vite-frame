import {defineConfig, type ProxyOptions} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const proxy: Record<string, ProxyOptions> = {
    '/api': {
        target: 'http://127.0.0.1:80',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, ''),
    }
}

export default defineConfig({
    plugins: [
        vue(),
        AutoImport(
            {
                resolvers: [
                    ElementPlusResolver()
                ]
            }
        ),
        Components(
            {
                resolvers: [
                    ElementPlusResolver()
                ]
            }
        )
    ],
    server:{
        proxy: proxy
    }
})