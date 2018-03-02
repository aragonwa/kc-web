import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

// For gzip
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.get('/theme-caring', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/theme-caring.html'));
});
app.get('/theme-default', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/theme-default.html'));
});
app.get('/theme-corporate', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/theme-corporate.html'));
});
app.get('/theme-environment', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/theme-environment.html'));
});

app.listen(port, err => {
  (err)? console.log(err):open('http://localhost:'+port);
})
