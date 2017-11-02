var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsrender = require('jsrender');
var session = require('client-sessions');


var dotenv = require('dotenv');
dotenv.load();


//Project Custom
const Youch = require('youch');
var mongo = require('mongoskin');
var bcrypt = require('bcrypt-nodejs');


//MongoDB
global.db || (global.db = mongo.db(process.env.DB_URI, {native_parser:true}));
global.mongo || (global.mongo = mongo);
//bcrypt
global.bcrypt || (global.bcrypt = bcrypt);

/*bcrypt.hash('123', null, null, function(err, hash) {
  console.log('hashing...'+hash );
 });*/

//routes
var routes = require('./routes/routes');

var app = express();



// Set JsRender as the template engine for Express - for .html files
app.engine('html', jsrender.__express);
app.set('view engine', 'html');

//session control
//default to 1 hour valid period
app.use(session({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 30 * 60 * 1000,
  activeDuration: 30 * 60 * 1000,
}));

// Specify folder location for storing JsRender templates for Express
app.set('views', __dirname + '/templates');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// create a write stream (in append mode)
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Route start here
 */
app.use('/',routes);

/*
 * Route end
 */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  //To check server environment,
  // if is development, use 'youch' to display UI friendly error page.
  if(process.env.ENV === 'development'){
	  const youch = new Youch(err, req);
	  youch
	    .toHTML()
	    .then((html) => {
	      res.writeHead(200, {'content-type': 'text/html'})
	      res.write(html)
	      res.end()
	    });
   }else{
   	// render user friendly error page
  		res.status(err.status || 500);

  		if(err.status == 404){
  			res.render('error/404');
  		}else{
  			res.render('error/500');
  		}

   }
});

module.exports = app;
