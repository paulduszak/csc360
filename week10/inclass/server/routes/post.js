var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");

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

router.get("/", async function (req, res, next) {
  const posts = await Post.find().exec();
  return res.status(200).json({ posts: posts });
});

router.use(function (req, res, next) {
  console.log(req.header("Authorization"));
  if (req.header("Authorization")) {
    try {
      req.payload = jwt.verify(req.header("Authorization"), privateKey, {
        algorithms: ["RS256"],
      });
      console.log(req.payload);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

router.get("/:postId", async function (req, res, next) {
  //const posts = await Post.find().where('author').equals(req.payload.id).exec()

  //mongoose find query to retrieve post where postId == req.params.postId
  const post = await Post.findOne()
    .where("_id")
    .equals(req.params.postId)
    .exec();

  return res.status(200).json(post);
});

router.post("/", async function (req, res) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.payload.id,
  });

  await post
    .save()
    .then((savedPost) => {
      return res.status(201).json({
        id: savedPost._id,
        title: savedPost.title,
        content: savedPost.content,
        author: savedPost.author,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

module.exports = router;
