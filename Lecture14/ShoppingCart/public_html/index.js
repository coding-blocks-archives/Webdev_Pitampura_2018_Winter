// Created by bhavyaagg on 2019-01-19

$(document).ready(() => {

  const $products = $('#products')

  $.get('/products').then((response) => {
    console.log(response)
    if (!response.success) {
      window.alert(response.msg)
    } else {

      response.data.forEach((element) => {
        let keys = Object.keys(element)
        const $child = $('<div class="productDiv"></div>');
        for (let key of keys) {
          const $p = $('<p></p>').append(`${key}: ${element[key]}`)
          $child.append($p)
        }
        $products.append($child)
      })

    }
  }).fail((err) => {
    console.log(err)
  })
})