import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "m9rhg4",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
