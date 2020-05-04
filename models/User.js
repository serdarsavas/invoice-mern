const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: String,
  street: String,
  zip: String,
  city: String,
  wechatId: String,
  position: String,
  company: String,
  registrationNumber: String,
  vatNumber: String,
  bankgiro: String,
  resetToken: String,
  resetTokenExpiration: Date
});

userSchema.virtual('invoices', {
  ref: 'Invoice',
  localField: '_id',
  foreignField: 'owner'
});

module.exports = User = mongoose.model('user', userSchema);
