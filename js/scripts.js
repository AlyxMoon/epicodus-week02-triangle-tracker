function getTriangleType(side1, side2, side3) {
  let triangleType = "something"

  if (side1 === side2 && side1 === side3) {
    triangleType = "equilateral"
  } else if (
    side1 === side2 ||
    side1 === side3 ||
    side2 === side3
  ) {
    triangleType = 'isosceles'
  } else {
    triangleType = "scalene"
  }
  return triangleType;
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    const triangleType = getTriangleType(side1, side2, side3)
  })
})