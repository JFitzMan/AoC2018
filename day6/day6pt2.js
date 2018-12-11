let fs = require('fs')
let maxX = 0
let maxY = 0
let points = []
let pointsStrings = fs.readFileSync('day6/input.txt', 'utf8').split('\n').map(x => x.trim('/r'))
// get array of point arrays and count [x, y, count]
points = pointsStrings.map((x) => {
  x = x.split(',')
  x[0] = parseInt(x[0].trim(' '))
  x[1] = parseInt(x[1].trim(' '))
  maxX = Math.max(maxX, x[0])
  maxY = Math.max(maxY, x[1])
  x.push(0)
  return x
})

let col = 0
let row = 0
let distance = 0
let x = 0
let y = 0
let total = 0
for (row = 0; row <= maxX; row++) {
  for (col = 0; col <= maxY; col++) {
    // loops over each point to check distance
    distance = 0

    let i = 0
    for (i = 0; i < points.length; i++) {
      x = points[i][0]
      y = points[i][1]
      distance += Math.abs(row - x) + Math.abs(col - y)
    }
    if (distance < 10000) {
      total += 1
    }
  }
}
console.log(total)
