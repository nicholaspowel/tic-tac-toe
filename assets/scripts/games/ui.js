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
// converts an array into the contents of tiles
const generateBoard = (board) => {
  $('.tile').each((index, tile) => {
    $(tile).text(board[index])
  })
}

const createSuccess = (data) => {
  store.game = data.game
  store.player = 'x'
  store.moves = 0
  generateBoard(data.game.cells)

  console.log('create data:', data)
  success('Game created!')
}

const indexSuccess = (data) => {
  success('All your games!')
}

const showSuccess = (data) => {
  generateBoard(data.game.cells)
  success('Game found!')
}

const updateSuccess = (data) => {
  generateBoard(data.game.cells)
  store.moves++
  success('Game updated!')
}

module.exports = {
  success,
  failure,
  createSuccess,
  indexSuccess,
  showSuccess,
  updateSuccess
}
