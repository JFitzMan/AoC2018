let fs = require('fs')
let instructions = fs.readFileSync('day7/input.txt', 'utf8').split('\n').map(x => x.trim('/r'))

let steps = {}
/*
steps{
  stepName : [
      prev: [],
      next: [],
      hasRun: false
  ],
}
*/
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
let stepsToRun = Object.keys(steps)

function getFirstStep (steps, stepList) {
  let i = 0
  let candidates = []
  for (i = 0; i < stepList.length; i++) {
    if (steps[stepList[i]]['prev'].length === 0) {
      candidates.push(stepList[i])
    }
  }
  let minLetter = 'Z'
  for (i = 0; i < candidates.length; i++) {
    if (candidates[i] < minLetter) {
      minLetter = candidates[i]
    }
  }
  return minLetter
}

function getNextStep (steps, completedSteps, stepsToRun) {
  let i = 0
  let candidates = []
  for (i = 0; i < stepsToRun.length; i++) {
    let prevRequirements = steps[stepsToRun[i]]['prev']
    let j = 0
    let readyToRun = true
    for (j = 0; j < prevRequirements.length; j++) {
      if (!completedSteps.includes(prevRequirements[j])) {
        readyToRun = false
      }
    }
    if (readyToRun) {
      candidates.push([stepsToRun[i]])
    }
  }
  let minLetter = 'Z'
  for (i = 0; i < candidates.length; i++) {
    if (candidates[i] < minLetter) {
      minLetter = candidates[i]
    }
  }
  return minLetter[0]
}

let initialStep = getFirstStep(steps, stepsToRun)
stepsToRun.splice(stepsToRun.indexOf(initialStep), 1)
let completedSteps = [initialStep]

let next = ''
while (stepsToRun.length > 0) {
  next = getNextStep(steps, completedSteps, stepsToRun)
  stepsToRun.splice(stepsToRun.indexOf(next), 1)
  completedSteps.push(next)
}
console.log(completedSteps.join(''))

