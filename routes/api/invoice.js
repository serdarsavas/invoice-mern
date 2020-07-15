const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Invoice = require('../../models/Invoice');
const User = require('../../models/User');

router.post(
  '/',
  [
    auth,
    [
      check('street', "'Gatuadress' måste vara ifyllt").not().isEmpty(),
      check('city', "'Stad' måste vara ifyllt").not().isEmpty(),
      check('description', "'Beskrivning' måste vara ifyllt").not().isEmpty(),
      check('quantity', "Ange 'Antal'").not().isEmpty(),
      check('price', "Ange 'Pris'").not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const invoice = new Invoice({ ...req.body });

      invoice.setNext();
      await invoice.save();
    } catch (err) {
      console.error(err);
      res.status(500).send('Serverfel');
    }
  }
);

module.exports = router;
