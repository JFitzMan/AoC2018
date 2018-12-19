let numPlayers = 9
let lastMarblePoints = 25
let players = Array(numPlayers).fill(0)
let curPlayer = 0
let curMarbleValue = 1
let marbles = [0, 1, 3]
let curMarbleIndex = 0

marbles.splice(2, 0, 2)
console.log(marbles)