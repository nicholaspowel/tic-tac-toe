'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
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

const onUpdate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.updateGame(data)
    .then(ui.updateSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onUpdate
}
