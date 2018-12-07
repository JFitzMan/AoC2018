function checkReaction (left, right){
    if (left == left.toUpperCase()){
        if (right == right.toLowerCase()){
            return left == right.toUpperCase()
        }
    }
    else if (left == left.toLowerCase()){
        if (right == right.toUpperCase()){
            return left == right.toLowerCase()
        }
    }
    return false
}

let fs = require('fs')
let polymer = fs.readFileSync('day5/input.txt', 'utf8').split('')

let i = 0
let change = true
while (change){
    change = false
    for (i=1; i<polymer.length; i++){
        if (checkReaction(polymer[i-1], polymer[i])){
            polymer.splice(i-1, 2)
            change = true
        }
    }
}
console.log(polymer.length)

console.log('Jordan Jordan jordan'.replace(/[Jj]/g, ""))