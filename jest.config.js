module.exports = {
  transform: {
    "\\.ts": [
      "./debug-transformer.js",
      {
        targets: {
          //esmodules: false,
        },
      },
    ],
  },
};
