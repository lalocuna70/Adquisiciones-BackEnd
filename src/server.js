const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const { mongodb } = require('./keys');
//const email = requiere('./email');

mongoose.connect(mongodb.URI);
// initializations
const app = express();
require('./database');
require('./passport/local-auth');

const optionsCors = {
  "allowedHeaders" : ['sessionId','Content-Type'],
  'exposedHeaders' : ['sessionId'],
  'credentials' : true,
  "origin": "http://localhost:8080",
}
app.use(cors(optionsCors));



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// middlewares
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/controllers'));
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(session({
  secret: 'dsflkasjfl',
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  ttl: 0 * 0 * 60 * 0,

  //cookie  : { maxAge  : new Date(Date.now(1000)) },
  saveUninitialized: false,
  
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  next();
});

// routes
app.use('/', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
