const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const funcionarioRouter = require ('./routes/funcionario');
require('./database');
const app = express();
const port = '3000';

app.listen(port);
app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/funcionario', funcionarioRouter);
module.exports = app;
