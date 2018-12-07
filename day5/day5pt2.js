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

function react (polymer) {
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
    return polymer.length
}

let fs = require('fs')
let polymerString = fs.readFileSync('day5/input.txt', 'utf8')

let char = 65
let len = 0
let minLen = polymerString.length
for (char = 65; char <= 90; char++){
    // build regex with upper/lower of a single letter
    regex = '['+String.fromCharCode(char) + String.fromCharCode(char+32) + ']'
    polymerAr = polymerString.replace(new RegExp(regex, 'g'), "").split('')
    len = react(polymerAr)
    if (len < minLen){ minLen = len }
}
console.log(len)
console.log(minLen)