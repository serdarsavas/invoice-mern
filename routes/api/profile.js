const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    });
    // .populate('user', ['name', 'email']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('company', 'Företag måste vara ifyllt').not().isEmpty(),
      check('phone', 'Telefon måste vara ifyllt').not().isEmpty(),
      check('street', 'Gatuadress måste vara ifyllt').not().isEmpty(),
      check('zip', 'Postkod måste vara ifyllt').not().isEmpty(),
      check('city', 'Stad måste vara ifyllt').not().isEmpty(),
      check('vatNumber', 'Momsregistreringsnummer måste vara ifyllt')
        .not()
        .isEmpty(),
      check('registrationNumber', 'Organisationsnummer måste vara ifyllt')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const {
    //   phone,
    //   wechatId,
    //   website,
    //   street,
    //   zip,
    //   city,
    //   company,
    //   position,
    //   registrationNumber,
    //   vatNumber,
    //   bankgiro,
    //   invoiceTemplate
    // } = req.body;

    const profileFields = { ...req.body };

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    await Post.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'Användaren är raderad' });
  } catch (err) {
    res.status(500).send('Serverfel');
  }
});

module.exports = router;
