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
  resetToken: String,
  resetTokenExpiration: Date,
  invoiceTemplate: {
    type: String,
    default: 1
  }
});

userSchema.virtual('invoices', {
  ref: 'Invoice',
  localField: '_id',
  foreignField: 'owner'
});

module.exports = User = mongoose.model('user', userSchema);
