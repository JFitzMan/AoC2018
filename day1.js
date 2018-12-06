// pt 1
function reader(err, data) {
    if (err) throw err;
    nums = data.split("\n").map(x => parseInt(x))
    var freq = 0
    var i
    for (i = 0; i < nums.length; i++){
        freq += nums[i]
    }
    console.log(freq)
}
var fs = require('fs');
fs.readFile('day1/input.txt', 'utf8', reader )

// pt 2
function reader(err, data) {
    if (err) throw err;
    nums = data.split("\n").map(x => parseInt(x))
    var freq = []
    var cur = 0
    var i = 0
    prev = 0
    while (!(freq.includes(cur+nums[i%nums.length]))){
        cur += nums[i%nums.length]
        freq.push(cur)
        i++
    }
    console.log(cur+nums[i%nums.length])
}
var fs = require('fs');
fs.readFile('day1/input.txt', 'utf8', reader )
 



