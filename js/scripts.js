$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    console.log('do stuff')
  })
})