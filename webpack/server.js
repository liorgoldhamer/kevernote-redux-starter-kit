require('babel-core/register')

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3001, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Webpack at localhost:3001');
});
