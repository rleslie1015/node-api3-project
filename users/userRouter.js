const express = require('express');

const router = express.Router();
const users = require('./userDb');

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  users.get()
  .then((users) => {
    res.status(200).json(users)
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id
  users.getById(id)
  .then(user => {
    res.status(200).json(user)
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  const id = req.params.id
  users.getUserPosts(id)
  .then(posts => {
    res.status(200).json(posts)
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id
  users.remove(id)
  .then(user => {
    res.status(200).json(user)
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
