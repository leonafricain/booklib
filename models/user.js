const mongoose = require('mongoose')

var validateEmail = function (email) {
  var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'This mail is already used'],
    validate: [validateEmail, 'Votre email n\'est pas valide']

  },
  password: {
    type: String,
    match: [/(?=.*\d)(?=.*[a-z])/, 'Votre password pas valid'],
    minlength: [5, 'password must > 5']
  }
})

module.exports = mongoose.model('User', userSchema)
