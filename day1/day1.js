// pt 1
function reader(err, data) {
    if (err) throw err;
    nums = data.split("\n").map(x => parseInt(x))
    //nums = data.split("\n").map(x => parseInt(x)).reduce((first, next) => first+next, 0)
    let freq = 0
    let i
    for (i = 0; i < nums.length; i++){
        freq += nums[i]
    }
    console.log(freq)
}
// node doesn't support the ES6 import module syntax, even though vs code thinks I should change this
let fs = require('fs');
fs.readFile('day1/input.txt', 'utf8', reader )
// this could also be an arrow function like this, and all work can be done in there
//fs.readFile('day1/input.txt', 'utf8', (err, data) => {
//    
//}
//) 


// pt 2
function readerpt2(err, data) {
    if (err) throw err;
    nums = data.split("\n").map(x => parseInt(x))
    let freq = []
    let cur = 0
    let i = 0
    prev = 0
    while (!(freq.includes(cur+nums[i%nums.length]))){
        cur += nums[i%nums.length]
        freq.push(cur)
        i++
    }
    console.log(cur+nums[i%nums.length])
}
fs.readFile('day1/input.txt', 'utf8', readerpt2 )
 



