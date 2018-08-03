const PassportLocalStrategy = require('passport-local').Strategy
const usersData = require('../data/users')
const jwt = require('jsonwebtoken')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim(),
    // name: req.body.name.trim(),
    // username: req.body.username.trim(),
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
  }

  const existingUser = usersData.findByEmail(email)
  if (existingUser) {
    return done('E-mail already exists!')
  }

  usersData.save(user)
  let savedUser = usersData.findByEmail(email)

  // create a jwt-token string
  const payload = {
    sub: savedUser.id
  }
  const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')
  
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

  // return done(null)
})

// Original Strategy
// module.exports = new PassportLocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   session: false,
//   passReqToCallback: true
// }, (req, email, password, done) => {
//   const user = {
//     email: email.trim(),
//     password: password.trim(),
//     name: req.body.name.trim()
//   }

//   const existingUser = usersData.findByEmail(email)
//   if (existingUser) {
//     return done('E-mail already exists!')
//   }

//   usersData.save(user)

//   return done(null)
// })
