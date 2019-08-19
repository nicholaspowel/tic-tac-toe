'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const logic = require('./logic.js')
const store = require('../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createSuccess)
    .then(onIndex)
    .catch((event) => {
      ui.message('#message', 'Operation Failed', false)
    })
}
const onIndex = (event) => {
  // const query = '' // for future queries restricted to wins
  if (event && event !== 'signin') {
    event.preventDefault()
  }
  api.indexGames()
    .then(ui.indexSuccess)
    .then(() => {
      $('.mini-board').on('click', (event) => {
        $('#myGamesModal').modal('toggle')
        onShow(event)
      })
    })
    .catch((event) => {
      ui.message('#message', 'Operation Failed', false)
    })
}
const onShow = (event) => {
  event.preventDefault()
  /*  */
  const data = {
    game: {
      id: event.currentTarget.dataset.id
    }
  } // getFormFields(event.target)
  api.showGame(data)
    .then(ui.showSuccess)
    .then(onIndex)
    .catch((event) => {
      ui.message('#message', 'Operation Failed', false)
    })
}
// UPDATE BOARD FUNCTION
const updateBoard = (move, isOver = false) => {
  event.preventDefault()
  const id = store.game.id
  const data = {
    game: {
      cell: {
        index: move[1],
        value: move[0]
      },
      over: isOver
    }
  }
  api.updateGame(data, id)
    .then(ui.updateSuccess)
    .catch((event) => {
      ui.message('#message', 'Operation Failed', false)
    })
}

const onTileClick = (event) => {
  ui.message('#game-message', '')
  event.preventDefault()
  if (store.game) {
    if (store.clickCounter > 10) {
      logic.clickRoll(ui.message)
    } else if (store.game.over) {
      ui.message('#game-message', 'The game is already over!')
      store.clickCounter++
      // Add in easter egg for behavior if they click too many times
    } else if (event.target.textContent !== '') {
      ui.message('#game-message', 'You can\'t move there!')
    } else {
      const move = [store.player, event.target.dataset.tile]
      const newBoard = logic.placePiece(move, store.game.cells)
      store.game.over = logic.checkWin(move[0], newBoard)
      if (store.game.over) {
        ui.message('#game-message', `Player ${store.player} Wins!`)
      } else if (!newBoard.some(cell => cell === '')) {
        store.game.over = true
        ui.message('#game-message', 'That\'s a draw!')
      }
      updateBoard(move, store.game.over)
    }
  } else {
    // NEED TO MESAGE THAT A NEW GAME IS NEEDED
    ui.message('#game-message', 'You need to create a game first')
  }
}
// {
//   "game": {
//     "id": 1,
//     "cells": ["x","","","","","","","",""],
//     "over":false,
//     "player_x": {
//       "id": 1,
//       "email": "and@and.com"
//       },
//     "player_o": null
//   }
// }

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onTileClick
}
