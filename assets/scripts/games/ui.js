'use strict'
const store = require('./../store.js')

const success = (message = 'Success!') => {
// does this need anything passed in?
  $('#message').text(message)
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

const createSuccess = (data) => {
  console.log('create data:', data)
  success('Game created!')
}

const indexSuccess = (data) => {
  success('All your games!')
}

const showSuccess = (data) => {
  success('game found!')
}

const updateSuccess = () => {
  success('Example updated!')
}

module.exports = {
  success,
  failure,
  createSuccess,
  indexSuccess,
  showSuccess,
  updateSuccess
}
