var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./components/index/indexRouter');
var readersRouter = require('./components/readers/readersRouter');
var librariansRouter = require('./components/librarians/librariansRouter');
var booksRouter = require('./components/books/booksRouter');
var lendingsRouter = require('./components/lendings/lendingsRouter');
var statisticsRouter = require('./components/statistics/statisticsRouter');
var rulesRouter = require('./components/rules/rulesRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/readers', readersRouter);
app.use('/librarians', librariansRouter);
app.use('/books', booksRouter);
app.use('/lendings', lendingsRouter);
app.use('/statistics', statisticsRouter);
app.use('/rules', rulesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('components/index/error');
});

module.exports = app;
