const jwt = require('jsonwebtoken')
const usersData = require('../data/users')
const PassportLocalStrategy = require('passport-local').Strategy

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim()
    // name: req.body.name.trim(),
    // username: req.body.username.trim(),
    // firstName: req.body.firstName.trim(),
    // lastName: req.body.lastName.trim(),
  }

  let savedUser = usersData.findByEmail(email)
  console.log('savedUser: ', savedUser)

  if (!savedUser) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'

    return done(error)
  }

  const isMatch = savedUser.password === user.password

  if (!isMatch) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'

    return done(error)
  }

  // create a jwt-token string
  const payload = {
    sub: savedUser.id
  }

  const token = jwt.sign(payload, 's0m3 r4nd0m str1ng',
  //  {expiresIn: '7d'}
  )
  const data = {
    id: savedUser.id,
    email: savedUser.email,
    // username: savedUser.username,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
    password: savedUser.password,
    isAdmin: savedUser.roles.includes('Admin')
  }

  return done(null, token, data)
})
