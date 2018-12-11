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
let minDistance = 1000000000
let closestPointIndex = -1
let distance = 0
let x = 0
let y = 0
for (row = 0; row <= maxX; row++) {
  for (col = 0; col <= maxY; col++) {
    // loops over each point to check distance
    closestPointIndex = -1
    minDistance = 1000000000
    let i = 0

    for (i = 0; i < points.length; i++) {
      x = points[i][0]
      y = points[i][1]
      distance = Math.abs(row - x) + Math.abs(col - y)
      if (distance < minDistance && distance > 0) {
        minDistance = distance
        closestPointIndex = i
        savedx = row
        savedy = col
      } else if (distance === 0) {
        closestPointIndex = i
        minDistance = distance
      } else if (distance === minDistance) {
        closestPointIndex = -1
        minDistance = distance
      }
    }
    if (closestPointIndex !== -1) {
      points[closestPointIndex][ 2 ]++
    }
  }
}
let firstPoints = points
points = pointsStrings.map((x) => {
  x = x.split(',')
  x[0] = parseInt(x[0].trim(' '))
  x[1] = parseInt(x[1].trim(' '))
  maxX = Math.max(maxX, x[0])
  maxY = Math.max(maxY, x[1])
  x.push(0)
  return x
})

col = 0
row = 0
minDistance = 1000000000
closestPointIndex = -1
distance = 0
x = 0
y = 0
for (row = -100; row <= maxX + 100; row++) {
  for (col = -100; col <= maxY + 100; col++) {
    // loops over each point to check distance
    closestPointIndex = -1
    minDistance = 1000000000
    let i = 0

    for (i = 0; i < points.length; i++) {
      x = points[i][0]
      y = points[i][1]
      distance = Math.abs(row - x) + Math.abs(col - y)
      if (distance < minDistance && distance > 0) {
        minDistance = distance
        closestPointIndex = i
      } else if (distance === 0) {
        closestPointIndex = i
        minDistance = distance
      } else if (distance === minDistance) {
        closestPointIndex = -1
        minDistance = distance
      }
    }
    if (closestPointIndex !== -1) {
      points[closestPointIndex][ 2 ]++
    }
  }
}



let maxArea = 0
let i = 0
for (i = 0; i < points.length; i++) {
  if (points[i][2] === firstPoints[i][2]) {
    maxArea = Math.max(maxArea, points[i][2])
  }
}
console.log(maxArea)
