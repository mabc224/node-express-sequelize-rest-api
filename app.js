const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const v1Router = require('./routes/index');

const app = express();

// *** cross domain requests *** //

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
  next();
});

app.disable('x-powered-by');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', v1Router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);

  const errorMessage = err.message;

  res.json({
    status: err.status || 500,
    statusCode: err.statusCode || 'Internal Error',
    message: errorMessage,
  });


  if (process.env.NODE_ENV === 'development') {
    console.log(err);
  }
});

module.exports = app;
