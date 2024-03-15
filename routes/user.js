const { Router } = require('express');
const User = require('../models/user');
const { handleUserSignUp, handleUserSingIn } = require('../controllers/user');

const router = Router();

router.get('/signin', (req, res) => {
  return res.render('signin');
});

router.get('/signup', (req, res) => {
  return res.render('signup');
});

router.post('/signin', handleUserSingIn);

router.post('/signup', handleUserSignUp);

module.exports = router;
