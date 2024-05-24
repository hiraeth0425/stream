// @ts-nocheck
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'auto-imports.d.ts',
      resolvers: [VantResolver()]
    }),
    Components({
      dts: true,
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ],
      resolvers: [VantResolver()]
      // resolvers: [
      //   (name) => {
      //     if (name.startsWith('Base')) {
      //       return {
      //         importName: name.slice(4),
      //         path: `@/components/${name}.vue`
      //       }
      //     }
      //   }
      // ]
    }),
    Pages({ dirs: 'src/pages', baseRoute: '' }),
    Layouts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/index.scss";`
      }
    }
  }
})
