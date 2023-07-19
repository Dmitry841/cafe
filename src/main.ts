import { Component, ComputedOptions, MethodOptions, createApp } from "vue";
import App from "./App.vue";
import components from "@/components/common";

const app = createApp(App);

components.forEach((component: Component) => {
  app.component(component.name || "", component);
});

app.mount("#app");
