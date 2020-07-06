const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./routes/api/users');
const test = require('./routes/api/test');
const config = require('./config/config');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

/* app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Pass to next layer of middleware
  next();
}); */

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoURI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running!');
  process.exit();
});

// app.use(passport.initialize());
// require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/test', test);

if (config.nodeEnv === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error!');
  });
}

app.listen(config.port, () => {
  console.log(`App running on port ${config.port}`);
});
