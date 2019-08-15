'use strict'
const store = require('./../store.js')

const success = (message = '') => {
// does this need anything passed in?
  $('#message').text('Success!' + message)
  $('#message').removeClass()
  // try $('#message').className('success')
  $('#message').addClass('success') // optional: adds css class for styling
  console.log('success ran')
  $('form').trigger('reset')
}
const failure = (message) => {
  $('#message').text('Error')
  $('#message').removeClass()
  $('#message').addClass('failure') // Optional
  console.error('failure ran')
  $('form').trigger('reset')
}

const signUpSuccess = () => {
  success('You have signed up!')
}
// // Sign In
const signInSuccess = (data) => {
// handle storing token, if it exists
  store.user = data.user
  console.log('new store:', store)
  $('#signed-in-user').text(store.user.email)
  $('#on-auth, #login').toggleClass('hidden') // fix this to use invisible where appropriate
  success(' You signed in!')
}

// Change Password
const changePasswordSuccess = () => {
  success('Changed Password!')
}

// Sign Out
const signOutSuccess = () => {
  store.user = null
  store.game = null
  store.player = null
  $('#signed-in-user').text('')
  success('Signed Out!')
  $('#on-auth, #login').toggleClass('hidden')
  $('#signed-in-user').text('')
}

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
