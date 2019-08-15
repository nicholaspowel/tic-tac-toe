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
const placePiece = (move) => {
  gameBoard[move[1]] = move[0]
  return gameBoard
}
const checkRow = (player, board = gameBoard) => {
  let hasWon = false
  for (let i = 0; i < board.length; i += 3) {
    const j = i * 3
    hasWon |= player && board[j] && board[j + 1] && board[j + 2]
  }
  return hasWon
}
const checkColumn = (player, board = gameBoard) => {
  let hasWon = false
  for (let i = 0; i < 3; i++) {
    hasWon |= player && board[i] && board[i + 3] && board[i + 6]
  }
  return hasWon
}
const checkDiagonal = (player, board = gameBoard) => {
  let hasWon = false
  hasWon |= player && board[0] && board[4] && board[8]
  hasWon |= player && board[2] && board[4] && board[6]
  return hasWon
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
