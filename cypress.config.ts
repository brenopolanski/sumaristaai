import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "m9rhg4",
  e2e: {
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
