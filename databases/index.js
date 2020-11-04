const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!")
});

let FormOne = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

let FormTwo = new mongoose.Schema({
  address:{
    line1: String,
    line2 : String,
    city: String,
    state: String,
    zipcode : Number
  },
  phonenumber: Number
})

let FormThree = new mongoose.Schema({
  creditcard : Number,
  expirydate : Date,
  CVV : String,
  billingZipCode : Number
})



//module.exports.save = save;