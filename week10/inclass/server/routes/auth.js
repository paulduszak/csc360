var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const saltRounds = 10;

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgG8AeZhc4zvDcFqurh8yn8cYH5ivcQhfqZl+dEh82FhJpb1kuTTd
yVKaB/PhN+bNjHcYu4BVaOMDobZcZnyl9nF2bxOiB3rdkp/DtgOuQF+h/oVQEV6v
GIzwtsLOUd+vH1DT2FDfUZ2vWW2ByEEwOk6SGQxdpI29XOXnIifNmZe3AgMBAAEC
gYANZipHaRcI9MuQNrvQCkVdPB08ShlD4IBRhgE1atSWu7UlCo6MwiT2Mp+5Ibuk
wbUt/y9LC4RQuvR/VeINM99upCDiacrrAfFrWfmgfZVBmPm1Br48UHiE4a1U05lQ
3fMs3RWW0qiCrEX0ne8F8GQWy8ivZaSyvIS4mI6ISuB4CQJBAKq1yhjVLxS1T4EU
uZ2u7VzJGEKChona6q5qsP/X2akfZ6CX5vUUd9Vv2/FoxnyDaSLnEq/o5HORFeH+
UcMxCR0CQQCmdd0j7mlE4veMeeyqvUnQFoWqEyma6DlwRhlZQ5x9JdfIOPEK2NI1
JbJx/6ISG4/pNY+4qus7H0w1cwah1B/jAkANLM6WMA3cKUojijfxJYkIOjT3HR/J
D+5A29chR8VyugvDZzXaAGRnQqTU8uMuxO2eVfspPG41RSNNN9WTnPs5AkEAoWvQ
vCRZXxz+U/J0SApxhuIgUpJsmTSzZqYDtOV03oORIi/dx9gE2NcqmZP9VbP2tX9k
VP8iR94M6BQYjVwIYwJBAIi/teGPgqztP/1SfLPsNWjjeDOmwrJOsVs1JdOeOwPK
BU5rlCPYBBNmDYpV8D+rO3lrzFNYSHZ3vbPlmKPg+W8=
-----END RSA PRIVATE KEY-----`;
//const privateKey = process.env.JWT_PRIVATE_KEY;

router.use(function (req, res, next) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      req.hashedPassword = hash;
      next();
    });
  });
});

router.post("/login", async function (req, res, next) {
  if (req.body.username && req.body.password) {
    const user = await User.findOne()
      .where("username")
      .equals(req.body.username)
      .exec();

    if (user) {
      return bcrypt
        .compare(req.body.password, user.password)
        .then((result) => {
          if (result === true) {
            const token = jwt.sign({ id: user._id }, privateKey, {
              algorithm: "RS256",
            });
            return res.status(200).json({ access_token: token });
          } else {
            return res.status(401).json({ error: "Invalid credentials." });
          }
        })
        .catch((error) => {
          return res.status(500).json({ error: error.message });
        });
    }

    return res.status(401).json({ error: "Invalid credentials." });
  } else {
    res.status(400).json({ error: "Username or Password Missing" });
  }
});

router.post("/register", async function (req, res, next) {
  if (req.body.username && req.body.password && req.body.passwordConfirmation) {
    if (req.body.password === req.body.passwordConfirmation) {
      const user = new User({
        username: req.body.username,
        password: req.hashedPassword,
      });
      return await user
        .save()
        .then((savedUser) => {
          console.log();
          return res.status(201).json({
            id: savedUser._id,
            username: savedUser.username,
          });
        })
        .catch((error) => {
          return res.status(500).json({ error: error.message });
        });
    }
    res.status(400).json({ error: "Passwords not matching" });
  } else {
    res.status(400).json({ error: "Username or Password Missing" });
  }
});

module.exports = router;
