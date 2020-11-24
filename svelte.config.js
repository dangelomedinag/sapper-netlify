const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
    postcss: {
      configFilePath: './postcss.config.js'
    },
    scss: true
  };

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),

    // Export this to allow rollup.config.js to inherit the same preprocess options.
    preprocessOptions,
}