import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// @ts-ignore
import path from "path";

export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    alias: {
      // 设置路径 这里resolve和join可自行选用
      // 设置别名
      "@": path.resolve(__dirname, "./src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // @ts-ignore
        additionalData: `@import "${path.resolve(__dirname, "src/static/css/common.less")}";@import "${path.resolve(__dirname, "src/static/css/variable.less")}";`
      }
    }
  },
  server: {
    https: false,
    proxy: {
      // TODO h5开发把下面的配置打开
      /*'/api': {
          target: 'https://blog.icestone.work',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, "")
      }*/
    },
  }
});
