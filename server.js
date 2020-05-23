// 添加一个注释
const express = require('express'),
  app = express();

app.listen('9090', () => console.log('server is open, port is 9090'));

app.use(express.static('./dist'));
