import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess(),
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
};
