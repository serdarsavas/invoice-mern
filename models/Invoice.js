const mongoose = require('mongoose');
// const config = require('config');
// const AutoIncrementFactory = require('mongoose-sequence');

// const db = config.get('mongoURI');

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: Number
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
        price: {
          type: Number,
          required: true
        },
        amount: {
          type: Number
        },
        hasVAT: Boolean
      }
    ],
    totalBeforeVAT: Number,
    totalAfterVAT: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

// mongoose.createConnection(db).then(connection => {
//   InvoiceSchema.plugin(AutoIncrementFactory(connection), {
//     inc_field: 'invoiceNumber',
//     disable_hooks: true,
//     start_seq: 100
//   });
// });

module.exports = Invoice = mongoose.model('invoice', InvoiceSchema);
