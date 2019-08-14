'use strict'
const config = require('../config')
const store = require('../store')

const createGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const indexGames = (isOver) => {
  const query = isOver !== undefined ? '?over=' + isOver : ''
  return $.ajax({
    url: config.apiUrl + '/games' + query,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id, // TODO check this
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id, // TODO check this
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createGame,
  showGame,
  indexGames,
  updateGame
}
