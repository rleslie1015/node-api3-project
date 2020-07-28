const express = require('express');

const router = express.Router();
const users = require('./userDb');
const posts = require('../posts/postDb')


router.post('/', (req, res) => {
  // do your magic!
  console.log(req.body)
  newUser = req.body
  users.insert(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(400).json({ message: err })
    })
  
})
  

router.post('/:id/posts', (req, res) => {
  // do your magic!
  console.log(req.body)
  const id = req.params.id
  users.getById(id)
  .then(user => {
    res.status(200).json(user)
    return user
  })
  const newPost = req.body;
  posts.insert(newPost)
  .then((post)=> {
    res.status(200).json(post)
  })
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
    res.status(200).json({message: `succesfully deleted user with id ${id}`})
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
  console.log(req.body)
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
