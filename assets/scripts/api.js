'use strict'

const store = require('./store')
const config = require('./config')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
