' use strict '

const api = require('./api.js')

const onGetBooks = function () {
  api.getBooks()
    .then(onClickSuccess)
    .catch(onError)
}

const onClickSuccess = responseData => {
  console.log(responseData)
  $('#book-display').html('')
  responseData.books.forEach(book => {
    // build HTML element with data
    const bookHTML = (`
        <h4>Title: ${book.title}</h4>
        <p>Author: ${book.author}</p>
        <p>ID: ${book.id}</p>
        <br>
      `)

    // append bookHTML to our book-display element
    $('#book-display').append(bookHTML)
  })
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)
  $('#error-message').html('Something went wrong, please try again.')
  $('#error-message').addClass('failure')
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)
}

module.exports = {
  onClickSuccess,
  onGetBooks
}
