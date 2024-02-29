import {createSSRApp} from "vue";
import App from "./App.vue";
import uviewPlus from "uview-plus";
import "uview-plus/theme.scss";
import pinia from "./stores";
import "uview-plus/index.scss";

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);
  return {
    app,
  };
}
