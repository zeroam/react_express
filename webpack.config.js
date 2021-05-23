const path = require("path");

module.exports = (env) => {
  console.log(env);
  let mode;
  if (env.development == true) {
    mode = "development";
  } else {
    mode = "production";
  }

  return {
    mode: mode,
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  };
};
