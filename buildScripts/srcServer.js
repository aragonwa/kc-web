import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(express.static(path.join(__dirname, '../src/assets')));
app.set('views', path.join(__dirname, '../src'));
app.set('view engine', 'html');

app.get('/', (req, res)=>{
  res.render('index');
});
app.get('/theme-caring', (req, res)=>{
  res.render('theme-caring');
});
app.get('/theme-default', (req, res)=>{
  res.render('index');
});
app.get('/theme-corporate', (req, res)=>{
  res.render('theme-corporate');
});
app.get('/theme-environment', (req, res)=>{
  res.render('theme-evnironment');
});

app.listen(port, err => {
  (err)? console.log(err):open('http://localhost:'+port);
})
