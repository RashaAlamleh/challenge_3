const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!")
});

let accountSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

let shippingSchema = new mongoose.Schema({
  address:{
    addressOne: String,
    addressTwo : String,
    city: String,
    state: String,
    zipcode : Number
  },
  phonenumber: Number
})

let billingSchema = new mongoose.Schema({
  creditcard : Number,
  expirydate : Date,
  CVV : Number,
  billingZipCode : Number
})


let account = mongoose.model('account', accountSchema);
let shipping = mongoose.model('shipping', shippingSchema);
let billing = mongoose.model('billing', billingSchema);

module.exports.account = account;
module.exports.shipping = shipping;
module.exports.billing = billing;
