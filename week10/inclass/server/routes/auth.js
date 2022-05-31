var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const saltRounds = 10;

const privateKey = process.env.JWT_PRIVATE_KEY;

router.use(function(req, res, next) {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.hashedPassword = hash;
        next();
    });
  });
})

router.post('/login', async function(req, res, next) {
  if (req.body.username && req.body.password) {
    
    const user = await User.findOne().where('username').equals(req.body.username).exec()

    if (user) {
      return bcrypt.compare(req.body.password, user.password).then(result => {
        if (result === true) {
          const token = jwt.sign({ id: user._id }, privateKey, { algorithm: 'RS256' });
          return res.status(200).json({"access_token": token});
        } else {
          return res.status(401).json({"error": "Invalid credentials."})
        }
      }).catch(error => {
        return res.status(500).json({"error": error.message})
      });
    }

    return res.status(401).json({"error": "Invalid credentials."})

  } else {
    res.status(400).json({"error": "Username or Password Missing"})
  }
});

router.post('/register', async function(req, res, next) {
  if (req.body.username && req.body.password && req.body.passwordConfirmation) {
    if(req.body.password === req.body.passwordConfirmation) {
      const user = new User({
        "username": req.body.username,
        "password": req.hashedPassword
      })
          
      return await user.save().then( savedUser => {
        console.log()
        return res.status(201).json({
          "id": savedUser._id,
          "username": savedUser.username
        })
      }).catch( error => {
        return res.status(500).json({"error": error.message})
      });
    }
    res.status(400).json({"error": "Passwords not matching"})
  } else {
    res.status(400).json({"error": "Username or Password Missing"})
  }
})

module.exports = router;
