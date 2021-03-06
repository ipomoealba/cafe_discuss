var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var login = require('./routes/login')
var routes = require('./routes/index');
var users = require('./routes/users');
var article = require('./routes/article');
var history = require('./routes/history');
var personalPage = require('./routes/personalPage');
var district = require('./routes/district');
var knowledge = require('./routes/knowledge');
var introduce = require('./routes/introduce');
var editcafePage = require('./routes/editcafePage');
var showPerson = require('./routes/showPerson')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(multer({ dest: './uploads/'}))

app.use(session({secret: 'FuckingProject_Yes'}));
app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/article', article);
app.use('/history', history);
app.use('/personalPage',personalPage);
app.use('/district',district);
app.use('/knowledge',knowledge);
app.use('/introduce',introduce);
app.use('/editcafePage',editcafePage);
app.use('/showPerson',showPerson);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
