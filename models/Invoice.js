const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    invoiceNumber: {
      type: String,
      required: true
    },
    assignmentNumber: String,
    recipient: {
      authority: String,
      refPerson: String,
      street: {
        type: String,
        required: true
      },
      zip: String,
      city: {
        type: String,
        required: true
      }
    },
    rows: [
      {
        description: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        },
        quantity: {
          type: Number,
          required: true
        },
        unit: String,
        price: {
          type: Number,
          required: true
        },
        amount: {
          type: Number,
          required: true
        },
        hasVAT: Boolean
      }
    ],
    totalBeforeVAT: Number,
    totalAfterVAT: Number,
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

module.exports = Invoice = mongoose.model('invoice', invoiceSchema);
