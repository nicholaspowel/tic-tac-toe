'use strict'

const store = require('./../store.js')
const logic = require('./../games/logic.js')

const message = (target = '#message', message = 'Success!', isSuccess = true) => {
  const style = isSuccess ? 'success' : 'failure'
  $(target).text(message)
  $(target).removeClass()
  // try $(target).className('success')
  $(target).addClass(style) // optional: adds css class for styling
  $('form').trigger('reset')
}

module.exports = {
  message
}
