function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    var plural = i === 0 ? '' : 's'
    array.push(`I am ${i} strange loop${plural}.`)
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
  }
}
