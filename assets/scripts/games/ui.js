'use strict'
const store = require('./../store.js')
const logic = require('./logic.js')

const message = (target = '#message', message = 'Success!', isSuccess = true) => {
// does this need anything passed in?
  const style = isSuccess ? 'success' : 'failure'
  $(target).text(message)
  $(target).removeClass()
  // try $(target).className('success')
  $(target).addClass(style) // optional: adds css class for styling
  $('form').trigger('reset')
}

// const failure = (message) => {
//   $('#message').text(message)
//   $('#message').removeClass()
//   $('#message').addClass('failure') // Optional
//   $('form').trigger('reset')
// }
// converts an array into the contents of tiles
// TODO make more flexibile in order to display all games
const generateBoard = (board = ['', '', '', '', '', '', '', '', '']) => {
  $('.tile').each((index, tile) => {
    $(tile).text(board[index])
  })
}

const createSuccess = (data) => {
  message('#game-message', '')
  store.game = data.game
  store.player = 'X'
  store.moves = 0
  generateBoard(data.game.cells)

  console.log('create data:', data)
  message('#message', 'Game created!', true)
}

const indexSuccess = (data) => {
  message('#game-message', '')
  store.user.games = data.games
  const wins = logic.countWins(data.games)
  // console.log('User Wins: ' + wins[0], 'User Data: ', store.user)
  $('#user-wins').text(wins[0])
  // wins will be displayed here
  // message('#message', 'All your games!')
}

const showSuccess = (data) => {
  store.game = data.game
  store.player = logic.getCurrentPlayer(store.game.cells)
  // need a method for determining who the current player is
  generateBoard(data.game.cells)
  message('#message', 'Game found!', true)
}

const updateSuccess = (data) => {
  generateBoard(data.game.cells)
  store.moves += 1
  console.log(store.moves)
  logic.togglePlayer()
  // give the player a messaging letting them know whose turn it is
  console.log('the player is now:', store.player)
  // message('#message', 'Game updated!', true)
}

module.exports = {
  message,
  createSuccess,
  indexSuccess,
  showSuccess,
  updateSuccess
}
