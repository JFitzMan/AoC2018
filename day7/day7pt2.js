let fs = require('fs')
let instructions = fs.readFileSync('day7/input.txt', 'utf8').split('\n').map(x => x.trim('/r'))

let steps = {}
let firstStep = ''
let nextStep = ''
let i = 0
for (i = 0; i < instructions.length; i++) {
  firstStep = instructions[i].slice(5, 6)
  nextStep = instructions[i].slice(36, 37)
  if (Object.keys(steps).includes(firstStep)) {
    steps[firstStep]['next'].push(nextStep)
  }
  if (Object.keys(steps).includes(nextStep)) {
    steps[nextStep]['prev'].push(firstStep)
  }
  if (!Object.keys(steps).includes(firstStep)) {
    steps[firstStep] = { prev: [], next: [nextStep], hasRun: false }
  }
  if (!Object.keys(steps).includes(nextStep)) {
    steps[nextStep] = { prev: [firstStep], next: [], hasRun: false }
  }
}

function getStepTime (stepLetter) {
  num = stepLetter.charCodeAt(0)
  return num - 64
}

function intitializeWorkers (numWorkers) {
  let i = 0
  let workers = {}
  for (i = 0; i < numWorkers; i++) {
    workers[i] = 0
  }
  return workers
}

function getFirstSteps (steps, stepList) {
  let i = 0
  let candidates = []
  for (i = 0; i < stepList.length; i++) {
    if (steps[stepList[i]]['prev'].length === 0) {
      candidates.push(stepList[i])
    }
  }
  return candidates.sort()
}

function getNextSteps (steps, completedSteps, stepList) {
  let i = 0
  let candidates = []
  for (i = 0; i < stepList.length; i++) {
    let prevRequirements = steps[stepList[i]]['prev']
    let j = 0
    let readyToRun = true
    for (j = 0; j < prevRequirements.length; j++) {
      if (!completedSteps.includes(prevRequirements[j])) {
        readyToRun = false
      }
    }
    if (readyToRun) {
      candidates.push([stepList[i]])
    }
  }
  return ([].concat.apply([], candidates)).sort()
}

function incrememntWorkers (workers, numWorkers) {
  let x = 0
  for (x = 0; x < numWorkers; x++) {
    if (workers[x] !== 0) {
      workers[x]--
    }
  }
  return workers
}

let stepsToRun = Object.keys(steps).sort()
console.log(stepsToRun)

let workers = intitializeWorkers(2)
let numWorkers = 2

// every iteration is a second
let second = 0
let potentialNextSteps = []
let completedSteps = []

// get list of possible next steps
potentialNextSteps = getFirstSteps(steps, stepsToRun)
// assign steps in order the appear to empty workers\
let potentialLength = potentialNextSteps.length
for (i = 0; i < potentialNextSteps.length; i++) {
  let thisStep = potentialNextSteps[i]
  // console.log('iteration ' + i + '\t' + potentialNextSteps)
  let j = 0
  // we got a step, lets find a worker
  let done = false
  for (j = 0; j < numWorkers; j++) {
    // got a worker, set his time to the time the step will take
    if (workers[j] === 0 && !done) {
      workers[j] = getStepTime(thisStep)
      stepsToRun.splice(stepsToRun.indexOf(thisStep), 1)
      potentialNextSteps.splice(potentialNextSteps.indexOf(thisStep), 1)
      completedSteps.push(thisStep)
      // on to the next potentialNextStep
      done = true
    }
  }
}
second++
// console.log('\n')
// console.log(workers)
// console.log(stepsToRun)
// console.log(second)

while (second < 20) {
  // only get new steps if we are out of next steps
  if (potentialNextSteps.length === 0) {
    potentialNextSteps = getNextSteps(steps, completedSteps, stepsToRun)
    console.log(potentialNextSteps)
  }
  // assign steps in order the appear to empty workers
  potentialLength = potentialNextSteps.length
  for (i = 0; i < potentialLength; i++) {
    let thisStep = potentialNextSteps[i]
    console.log('iteration ' + i + '\t' + potentialNextSteps)
    let j = 0
    // we got a step, lets find a worker
    let done = false
    for (j = 0; j < numWorkers; j++) {
      // got a worker, set his time to the time the step will take
      console.log(workers[0])
      if (workers[j] === 0 && !done) {
        console.log(thisStep)
        workers[j] = getStepTime(thisStep)
        stepsToRun.splice(stepsToRun.indexOf(thisStep), 1)
        potentialNextSteps.splice(potentialNextSteps.indexOf(thisStep), 1)
        completedSteps.push(thisStep)
        console.log(thisStep)
        // on to the next potentialNextStep
        done = true
      }
    }
  }
  workers = incrememntWorkers(workers, numWorkers)
  // console.log('\n')
  // console.log(workers)
  // console.log(stepsToRun)
  // console.log(second)
  // console.log(completedSteps)
  second++
}

console.log('\n')
console.log(workers)
console.log(stepsToRun)
console.log(second)
console.log(completedSteps)
