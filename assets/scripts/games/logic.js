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
    hasWon |= (player === board[i] && board[i] === board[i + 1] && board[i] === board[i + 2])
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
// Get current player
const getCurrentPlayer = (board) => {
  const o = board.filter(val => val === 'O')
  const x = board.filter(val => val === 'X')
  return o.length < x.length ? 'O' : 'X'
}

// Count Wins
const countWins = (games) => {
  const wins = games.filter(game => {
    return game.over && checkWin('X', game.cells)
  })
  return [wins.length, wins]
}

// {
//   "games": [
//     {
//       "id": 1,
//       "cells": ["o","x","o","x","o","x","o","x","o"],
//       "over": true,
//       "player_x": {
//         "id": 1,
//         "email": "and@and.com"
//       },
//       "player_o": null
//     },
//     {
//       "id": 2,
//       "cells": ["","","","","","","","",""],
//       "over": false,
//       "player_x": {
//         "id": 3,
//         "email": "dna@dna.com"
//       },
//       "player_o": null
//     }
//   ]
// }
module.exports = {
  placePiece,
  checkRow,
  checkColumn,
  checkDiagonal,
  checkWin,
  togglePlayer,
  getCurrentPlayer,
  countWins
}
