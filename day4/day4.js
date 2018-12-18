function getArray () {
  let ar = []
  for (i = 0; i < 60; i++) {
    ar.push(0)
  }
  return ar
}

let fs = require('fs')
let log = fs.readFileSync('day4/input.txt', 'utf8').split('\n').map(x => x.trim('/r'))
log.sort()

let id = 0
let sleepTime = 0
let wakeTime = 0
let guards = {}
for (index = 0; index < log.length; index++) {
  // new guard, update current ID
  if (log[index].includes('#')) {
    id = parseInt(log[index].slice(log[index].indexOf('#') + 1, log[index].indexOf('b') - 1))
    // if this is a guard not seen before, initialize them an empty array
    if (!(id in guards)) { guards[id] = getArray() }
  }
  // falls asleep: save sleep time
  else if (log[index].includes('falls asleep')) {
    sleepTime = parseInt(log[index].slice(log[index].indexOf(':') + 1, log[index].indexOf(']')))
  }
  // wakes up: increment guards array
  else if (log[index].includes('wakes up')) {
    wakeTime = parseInt(log[index].slice(log[index].indexOf(':') + 1, log[index].indexOf(']')))
    for (x = sleepTime; x < wakeTime; x++) {
      guards[id][x] += 1
    }
  } else { console.log('How did this happen?\t' + log[index]) }
}

// pt1
let maxid = 0
let maxtotal = 0
let maxminute = 0
entries = Object.entries(guards)
for (index = 0; index < entries.length; index++) {
  totalmin = entries[index][1].reduce((x, y) => x + y, 0)
  if (totalmin > maxtotal) {
    maxtotal = totalmin
    maxid = entries[index][0]
    maxminuteValue = Math.max(...entries[index][1])
    maxminute = entries[index][1].indexOf(maxminuteValue)
  }
}
console.log(maxid * maxminute)

// pt2
maxid = 0
let max = 0
maxminuteValue = 0
entries = Object.entries(guards)
for (index = 0; index < entries.length; index++) {
  maxminuteValue = Math.max(...entries[index][1])
  if (maxminuteValue > max) {
    max = maxminuteValue
    maxid = entries[index][0]
    maxminute = entries[index][1].indexOf(maxminuteValue)
  }
}
console.log(maxid * maxminute)
