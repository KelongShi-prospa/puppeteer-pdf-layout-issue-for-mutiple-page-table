const createError = require('http-errors');
const express = require('express');
const path = require('path');

const pdfGenerator = require('./src/controllers/pdf');


const app = express();


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ready', (req, res) => {
  res.status(200).send('ready');
});


app.get('/pdf/:executionPath', (request, response) => {
  pdfGenerator(request, response);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
