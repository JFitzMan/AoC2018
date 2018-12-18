let fs = require('fs')
let nodes = fs.readFileSync('day8/input.txt', 'utf8').split(' ')

let i = 0
for (i = 0; i < nodes.length; i++) {
  nodes[i] = parseInt(nodes[i])
}

function parseNodes (headerIndex, nodes) {
  // console.log("Header Index: "+ headerIndex)
  let numChild = nodes[headerIndex]
  let numMeta = nodes[headerIndex + 1]
  let metaIndex = headerIndex + 2

  while (numChild > 0) {
    // console.log("Children numer: "+ numChild)
    parseNodes(metaIndex, nodes)
    // console.log('nodes looks like: '+ nodes)
    numChild = numChild - 1
  }
  let i = 0
  for (i = 0; i < numMeta; i++) {
    metaSum += nodes[metaIndex + i]
  }
  nodes.splice(headerIndex, numMeta + 2)
  // console.log(metaSum)
}

function parseNodes2 (headerIndex, nodes) {
  // console.log("Header Index: "+ headerIndex)
  let numChild = nodes[headerIndex]
  let numMeta = nodes[headerIndex + 1]
  let metaIndex = headerIndex + 2
  let childNodeVals = []
  let nodeSum = 0

  let curNumChild = numChild
  while (curNumChild > 0) {
    //console.log('Children numer: ' + curNumChild)
    childNodeVals.push(parseNodes2(metaIndex, nodes))
    //console.log('nodes looks like: ' + nodes)
    curNumChild = curNumChild - 1
  }
  //console.log('childNodeVals: '+ childNodeVals)
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
  //console.log('nodeSum: ' + nodeSum)
  return nodeSum
}

let metaSum = 0
console.log(parseNodes2(0, nodes))
