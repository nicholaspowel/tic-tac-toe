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
const gameBoard = store.game ? store.game.cells : null
const togglePlayer = () => store.player ? 'O' : 'X'
const placePiece = (player, index) => {
  gameBoard[index] = player
  return gameBoard
}
const checkRow = (player, board = gameBoard) => {
  let hasWon = false
  // board.slice(0,3).every(play)
  return hasWon
}
const checkColumn = (player, board = gameBoard) => {

}
const checkDiagonal = (player, board = gameBoard) => {

}
const checkWin = (player, board = gameBoard) => {
  return checkRow(player, board) || checkColumn(player, board) || checkDiagonal(player, board)
}

const reset = () => {}
const start = () => {}

module.exports = {
  placePiece,
  checkRow,
  checkColumn,
  checkDiagonal,
  checkWin,
  togglePlayer,
  reset,
  start
}
