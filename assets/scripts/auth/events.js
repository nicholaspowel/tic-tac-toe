'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const gameEvents = require('../games/events.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// event handler for sign-up form
const onSignUp = (event) => {
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make the api call
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
  // handle success

  // handle failure
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(gameEvents.onIndex)
    .catch(ui.failure)
}

// CHANGE PASSWORD

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target) // {passwords: {old: 123, new: 456}}

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

// SIGN OUT

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
