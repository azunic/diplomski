const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const users = require('./routes/api/users');
const test = require('./routes/api/test');
const brands = require('./routes/api/brands');
const mainCategories = require('./routes/api/mainCategories');
const productCategories = require('./routes/api/productCategories');
const productSubCategories = require('./routes/api/productSubCategories');
const post = require('./routes/api/post');
const couponCode = require('./routes/api/couponCode');
const notifications = require('./routes/api/notifications');
const products = require('./routes/api/products');
const productVariant = require('./routes/api/productVariant');
const utilities = require('./routes/api/utilities');
const wardrobe = require('./routes/api/wardrobe');

const config = require('./config/config');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
console.log('config.mongoURI', config.mongoURI);
mongoose.connect(config.mongoURI);

mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running!');
  process.exit();
});

// Routes
app.use('/api/users', users);
app.use('/api/test', test);
app.use('/api/brands', brands);
app.use('/api/main-categories', mainCategories);
app.use('/api/product-categories', productCategories);
app.use('/api/product-sub-categories', productSubCategories);
app.use('/api/post', post);
app.use('/api/coupon-code', couponCode);
app.use('/api/notifications', notifications);
app.use('/api/products', products);
app.use('/api/product-variant', productVariant);
app.use('/api/utilities', utilities);
app.use('/api/wardrobe', wardrobe);

if (config.nodeEnv === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, _, res) => {
    console.error(err);
    res.status(500).send('Server Error!');
  });
}

app.listen(config.port, () => {
  console.log(`App running on port ${config.port}`);
});
