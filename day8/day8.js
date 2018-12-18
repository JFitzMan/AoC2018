let fs = require('fs')
let nodes = fs.readFileSync('day8/input.txt', 'utf8').split(' ')

let i = 0
for (i = 0; i < nodes.length; i++) {
  nodes[i] = parseInt(nodes[i])
}

function parseNodes (headerIndex, nodes) {
  let numChild = nodes[headerIndex]
  let numMeta = nodes[headerIndex + 1]
  let metaIndex = headerIndex + 2

  while (numChild > 0) {
    parseNodes(metaIndex, nodes)
    numChild = numChild - 1
  }
  let i = 0
  for (i = 0; i < numMeta; i++) {
    metaSum += nodes[metaIndex + i]
  }
  nodes.splice(headerIndex, numMeta + 2)
}

function parseNodes2 (headerIndex, nodes) {
  let numChild = nodes[headerIndex]
  let numMeta = nodes[headerIndex + 1]
  let metaIndex = headerIndex + 2
  let childNodeVals = []
  let nodeSum = 0

  let curNumChild = numChild
  while (curNumChild > 0) {
    childNodeVals.push(parseNodes2(metaIndex, nodes))
    curNumChild = curNumChild - 1
  }
  if (numChild === 0) {
    let i = 0
    for (i = 0; i < numMeta; i++) {
      nodeSum += nodes[metaIndex + i]
    }
  } else {
    let i = 0
    for (i = 0; i < numMeta; i++) {
      if (nodes[metaIndex + i]-1 < childNodeVals.length) {
        nodeSum += childNodeVals[nodes[metaIndex + i]-1]
      }
    }
  }
  nodes.splice(headerIndex, numMeta + 2)
  return nodeSum
}

let metaSum = 0
console.log(parseNodes2(0, nodes))
