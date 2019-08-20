'use strict'
const store = require('./../store.js')
const logic = require('./logic.js')

const message = (target = '#message', message = 'Success!', isSuccess = true) => {
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
  store.canClick = true
  store.clickCounter = store.clickCounter < 16 ? 0 : store.clickCounter
  generateBoard(data.game.cells)
  message('#game-message', `It is now ${store.player}'s turn!`, true)
}

const indexSuccess = (data) => {
  // message('#game-message', '')
  store.user.games = data.games
  const wins = logic.countWins(data.games)
  $('#user-wins').text('Games Won: ' + wins[0])
  const gameList = data.games.reduce(function (list, game, index) {
    // create a div using the relevant content
    const htmlString = `
      <div data-id="${game.id}" data-over="${game.over}" class="col-4 col-md-3 mini-board container">
        <h6>Game ID: ${game.id}</h6>
        <div class="row">
          <div class="col-4 mini-box">${game.cells[0]}</div>
          <div class="col-4 mini-box">${game.cells[1]}</div>
          <div class="col-4 mini-box">${game.cells[2]}</div>
          <div class="col-4 mini-box">${game.cells[3]}</div>
          <div class="col-4 mini-box">${game.cells[4]}</div>
          <div class="col-4 mini-box">${game.cells[5]}</div>
          <div class="col-4 mini-box">${game.cells[6]}</div>
          <div class="col-4 mini-box">${game.cells[7]}</div>
          <div class="col-4 mini-box">${game.cells[8]}</div>
        </div>
      </div>
    `

    return list + htmlString
  }, '')
  $('#game-list').html(gameList)
}

const showSuccess = (data) => {
  store.game = data.game
  store.player = logic.getCurrentPlayer(store.game.cells)
  generateBoard(data.game.cells)
  const isOver = logic.checkWin('X', store.game.cells) || logic.checkWin('O', store.game.cells)
  store.game.over = isOver
  message('#message', 'Game found!', true)
}

const updateSuccess = (data) => {
  generateBoard(data.game.cells)
  store.moves += 1
  if (!store.game.over) {
    logic.togglePlayer()
    message('#game-message', `It is now ${store.player}'s turn!`, true)
  }
  store.canClick = true
}

module.exports = {
  message,
  createSuccess,
  indexSuccess,
  showSuccess,
  updateSuccess
}
