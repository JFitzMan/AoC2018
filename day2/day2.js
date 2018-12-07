
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

console.log('Part 1 answer:\t' + (twoCts*threeCts))


// pt 2

// all strings are same length
let len = strings[100].length
let i = 0
for (i=0; i < len; i++){
    // eliminate letter from index i from all strings
    let temp = strings.map(x => x.slice(0, i).concat(x.slice(i+1)))
    // check for duplicates in temp
    counts = []
    let j = 0
    for (j=0; j < temp.length; j++){
        counts[temp[j]] = !(temp[j] in counts) ? 1 : console.log('Part 2 answer: ' +temp[j])
    }
}



