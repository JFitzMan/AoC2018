let numPlayers = 9
let lastMarblePoints = 25
let players = Array(numPlayers).fill(0)
let curPlayer = 1
let curMarbleValue = 2
let marbles = [0, 1]
let curMarbleIndex = 1

function turn () {
  // first, place the next marble between the marbles that are 1 and 2 marbles clocwise of cur
  curMarbleIndex = (curMarbleIndex + 2) % (marbles.length)
  // accoutns for the fact the array is about to grow by one
  if (curMarbleIndex === 0) { curMarbleIndex = marbles.length }
  marbles.splice(curMarbleIndex, 0, curMarbleValue)
  curMarbleValue++
  curPlayer = (curPlayer + 1) % numPlayers
}

let i = 0
for (i = 0; i < 5; i++) {
  console.log(curMarbleIndex + '\t[' + curPlayer + ']  ' + marbles)
  turn()
}
