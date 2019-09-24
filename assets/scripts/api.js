'use strict'

const store = require('./store')
const config = require('./config')

const getBooks = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
