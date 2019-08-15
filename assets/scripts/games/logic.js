const store = require('../store')

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
const checkTeam = isPlayerOne => isPlayerOne ? 'x' : 'o'
const placePiece = (player, index) => {
  const board = store.game.cells
}
const checkRow = (player, board) => {}
const checkColumn = (player, board) => {}
const checkDiagonal = (player, board) => {}
const checkWin = (player, board) => {}

const reset = () => {}
const start = () => {}

module.exports = {
  placePiece,
  checkRow,
  checkColumn,
  checkDiagonal,
  checkWin,
  checkTeam,
  reset,
  start
}
