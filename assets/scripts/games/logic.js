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
const togglePlayer = () => {
  store.player = store.player === 'X' ? 'O' : 'X'
}
const placePiece = (move, board) => {
  board[move[1]] = move[0]
  return board
}

const checkRow = (player, board) => {
  let hasWon = false
  for (let i = 0; i < board.length; i += 3) {
    const j = i * 3
    hasWon |= (player === board[j] && board[j] === board[j + 1] && board[j] === board[j + 2])
  }
  return hasWon
}
const checkColumn = (player, board) => {
  let hasWon = false
  for (let i = 0; i < 3; i++) {
    hasWon |= (player === board[i] && board[i] === board[i + 3] && board[i] === board[i + 6])
  }
  return hasWon
}
const checkDiagonal = (player, board) => {
  let hasWon = false
  hasWon |= (player === board[0] && board[0] === board[4] && board[0] === board[8])
  hasWon |= (player === board[2] && board[2] === board[4] && board[2] === board[6])
  return hasWon
}
const checkWin = (player, board) => {
  return checkRow(player, board) || checkColumn(player, board) || checkDiagonal(player, board)
}
// Count Wins

module.exports = {
  placePiece,
  checkRow,
  checkColumn,
  checkDiagonal,
  checkWin,
  togglePlayer
}
