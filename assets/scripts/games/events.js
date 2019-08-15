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
  const move = [store.player, event.target.dataset.tile]
  // check if board is isOver
  //  TODO: dipslay that game is over
  // check if tile is filled
  //  TODOkey: 'value'display that player can't click there
  // placePiece
  // checkWin
  //  if win, set isOver
  const data = store.game
  updateBoard(data)
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

const updateBoard = (data) => {
  event.preventDefault()
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
