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

const clickRoll = (message) => {
  const count = store.clickCounter
  if (count < 11) {
    message('#game-message', 'Please stop')
  } else if (count < 12) {
    message('#game-message', 'Really, that\'s enough of that')
  } else if (count < 13) {
    message('#game-message', 'Are you always like this?')
  } else if (count < 14) {
    message('#game-message', 'What would your parents say?')
  } else if (count < 15) {
    message('#game-message', 'This is your last warning')
  } else if (count < 16) {
    message('#game-message', 'That\'s it, you asked for it!')
  } else if (count < 17) {
    message('#game-message', 'This is the song that never ends.')
  } else if (count < 18) {
    message('#game-message', 'Yes, it goes on and on my friends.')
  } else if (count < 19) {
    message('#game-message', 'Some people started singing it, not knowing what it was,')
  } else if (count < 20) {
    message('#game-message', 'And they\'ll continue singing it forever just because.')
  } else {
    message('#game-message', 'This is the song that never ends.')
    store.clickCounter = 16
  }
  store.clickCounter += 1
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
  countWins,
  clickRoll
}
