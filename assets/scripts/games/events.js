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
    .catch(ui.failure)
}
const onIndex = (event) => {
  event.preventDefault()

  api.indexGames()
    .then(ui.indexSuccess)
    .catch(ui.failure)
}
const onShow = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onShow data:', data)
  api.showGame(data)
    .then(ui.showSuccess)
    .catch(ui.failure)
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
    .catch(ui.failure)
}

const onTileClick = (event) => {
  event.preventDefault()
  console.log('tile id: ', event.target.dataset.tile)
  if (store.game) {
    // let isOver = store.game.over
    const board = store.game.cells
    // check if board is isOver
    // console.log('before checks, over = ', store.game.over)
    if (store.game.over) {
      //  TODO: dipslay that game is over
      console.log('Game Over')
    } else if (event.target.textContent !== '') {
      console.log('You cannot click there')
    } else {
      // console.log('The player is: ', store.player)
      const move = [store.player, event.target.dataset.tile]
      // console.log('the board was:', board)
      const newBoard = logic.placePiece(move, board)
      // console.log('the board is now:', newBoard)
      // console.log('before checks, ovver = ', store.game.over)
      store.game.over = logic.checkWin(move[0], newBoard)
      // console.log('after checkWin isOver = ', store.game.over)
      if (store.moves === 9) {
        store.game.over = true
        // isOver = true
      }
      // placePiece
      // checkWin
      //  if win, set isOver

      updateBoard(move, store.game.over)
    }
  } else {
    console.log('You need to create a game first')
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
