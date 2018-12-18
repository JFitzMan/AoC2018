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

let metaSum = 0
parseNodes(0, nodes)
console.log(metaSum)
