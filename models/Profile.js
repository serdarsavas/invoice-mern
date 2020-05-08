const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  company: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  street: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  wechatId: {
    type: String
  },
  position: {
    type: String
  },
  company: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  vatNumber: {
    type: String,
    required: true
  },
  bankgiro: {
    type: String
  },
  invoiceTemplate: {
    type: String,
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
