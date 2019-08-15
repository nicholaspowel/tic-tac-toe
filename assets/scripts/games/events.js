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

const onTileClick = (event) => {
  event.preventDefault()
  let isOver = store.game ? store.game.over : false
  // check if board is isOver
  if (!isOver) {
    //  TODO: dipslay that game is over
  } else if (event.target.textContent !== '') {
    //  TODOkey: 'value'display that player can't click there
  } else {
    const move = [store.player, event.target.dataset.tile]
    const updateBoard = logic.placePiece(move)
    isOver = logic.checkWin(move[1], updateBoard)
    // placePiece
    // checkWin
    //  if win, set isOver

    updateBoard(move, isOver)
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

const updateBoard = (move, isOver = false) => {
  event.preventDefault()
  const data = {
    game: {
      cell: {
        index: move[1],
        value: move[0]
      },
      over: isOver
    }
  }
  // if data
  // {
  //   "game": {
  //     "cell": {
  //       "index": 0,
  //       "value": "x"
  //     },
  //     "over": false
  //   }
  // }
  api.updateGame(data)
    .then(ui.updateSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onTileClick
}
