const User = require('../models/user');

async function handleUserSignUp(req, res) {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect('/');
}

async function handleUserSingIn(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.matchPassword(email, password);
  console.log('User', user);
  return res.redirect('/');
}

module.exports = {
  handleUserSignUp,
  handleUserSingIn,
};
