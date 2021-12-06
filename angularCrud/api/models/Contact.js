// Contact.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Contact
let Contact = new Schema({
  ContactName: {
    type: String
  },
  ContactDescription: {
    type: String
  },
  ContactNumber: {
    type: Number
  }
},{
    collection: 'Contact'
});

module.exports = mongoose.model('Contact', Contact);