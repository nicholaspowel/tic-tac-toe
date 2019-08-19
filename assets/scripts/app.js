'use strict'
const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authorization handlers
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Game handlers
  $('#new-game').on('click', gameEvents.onCreate)
  $('.tile').on('click', gameEvents.onTileClick)
  // $('#show-game').on('submit', gameEvents.onShow)
})
