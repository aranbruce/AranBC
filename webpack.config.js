// constants


// variables


// module exports
module.exports = {
  entry: './src/scripts/app.js',
  output: {
    path: __dirname+'/dist/scripts',
    filename: 'scripts.bundle.js',
  },
  // entry: './src/scripts/sw.js',
  // output: {
  //   path: __dirname+'/dist',
  //   filename: 'sw.js',
  // },
  devServer: {
    contentBase: __dirname+'/dist',
    compress: true,
    port: 8000,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  }
};
