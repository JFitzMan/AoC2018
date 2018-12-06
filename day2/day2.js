
// pt 1
function counts (value) {
  let i = 0
  let letters = []
  for (i = 0; i < value.length; i++) {
    letters[value.charAt(i)] = !(value.charAt(i) in letters) ? 1 : letters[value.charAt(i)] + 1
  }
  let counts = Object.values(letters)

  if (counts.includes(2)) { twoCts++ }
  if (counts.includes(3)) { threeCts++ }
}

let fs = require('fs')

let strings = fs.readFileSync('day2/input.txt', 'utf8').split('\n')
let twoCts = 0
let threeCts = 0

strings.forEach(counts)

console.log(twoCts*threeCts)
