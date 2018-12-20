/* eslint-disable brace-style */
let numPlayers = 410
let lastMarblePoints = 7205900
let players = Array(numPlayers).fill(0)
let curPlayer = 1
let curMarbleValue = 2
let marbles = [0, 1]
let curMarbleIndex = 1

function turn () {
  // special case: multiple of 23
  let len = marbles.length
  if (curMarbleValue % 23 === 0) {
    let newIndex = ((curMarbleIndex - 7) % len + len) % len
    let toAdd = marbles.splice(newIndex, 1)[0]
    players[curPlayer] += (parseInt(curMarbleValue) + parseInt(toAdd))
    curMarbleIndex = newIndex
  } else {
    curMarbleIndex = (curMarbleIndex + 2) % (len)
    // accounts for the fact the array is about to grow by one
    if (curMarbleIndex === 0) { curMarbleIndex = len }
    marbles.splice(curMarbleIndex, 0, curMarbleValue)
  }
  curMarbleValue++
  curPlayer = (curPlayer + 1) % numPlayers
}

let i = curMarbleValue
let d = new Date()
for (i = curMarbleValue; i <= lastMarblePoints; i++) {
  if (i % 72059 === 0) {
    console.log(i)
    d = new Date()
    console.log(d)
  }
  // console.log(curMarbleValue + '\t' + curMarbleIndex + '\t[' + curPlayer + ']  ' + marbles)
  turn()
}

console.log(Math.max(...players))
// console.log(players)
