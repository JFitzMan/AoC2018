// pt 1
let dim = 2000
let fabric = Array(dim)
let i = 0
for (i=0; i<fabric.length; i++){
    fabric[i] = Array(dim).fill(0)
}

let fs = require('fs')
let claims = fs.readFileSync('day3/input.txt', 'utf8').split('\n').map(x => x.trim('/r'))

claims.forEach( claim => {
    num = claim.slice(0, claim.indexOf('@')).trim()
    Xstart = parseInt(claim.slice(claim.indexOf('@')+1, claim.indexOf(',')).trim())
    Ystart = parseInt(claim.slice(claim.indexOf(',')+1, claim.indexOf(':')).trim())
    width = parseInt(claim.slice(claim.indexOf(':')+1, claim.indexOf('x')).trim())
    height = parseInt(claim.slice(claim.indexOf('x')+1).trim())

    let row = Ystart
    for (row; row < height+Ystart; row++){
        let col = Xstart
        for (col; col < width+Xstart; col++){
            fabric[row][col] += 1
        }
    }
})

count = 0
for (i=0; i<dim; i++){
    let j = 0
    for (j; j<dim; j++){
        if (fabric[j][i] > 1) { count++ }
    }
}
console.log(count)

// pt2, loop back over array and look for the one with no overlaps
claims.forEach( claim => {
    num = claim.slice(0, claim.indexOf('@')).trim()
    Xstart = parseInt(claim.slice(claim.indexOf('@')+1, claim.indexOf(',')).trim())
    Ystart = parseInt(claim.slice(claim.indexOf(',')+1, claim.indexOf(':')).trim())
    width = parseInt(claim.slice(claim.indexOf(':')+1, claim.indexOf('x')).trim())
    height = parseInt(claim.slice(claim.indexOf('x')+1).trim())

    let row = Ystart
    let flag = true
    for (row; row < height+Ystart; row++){
        let col = Xstart
        for (col; col < width+Xstart; col++){
            if (fabric[row][col] > 1){
                flag = false
            }
        }
    }
    if (flag == true) {console.log(num)}
})
