const puzzle = require(`./${process.argv[2] || 'index'}.js`)

const A = [1,2,3,4,5,6,7,8]
const Ak = 6
console.log("A", A)
console.log("Ak", Ak)
console.log("puzzle(A, Ak)", puzzle(A, Ak))

const B = [8,2,10,3,7]
const Bk = 10
console.log("B", B)
console.log("Bk", Bk)
console.log("puzzle(B, Bk)", puzzle(B, Bk))

const C = [12,12,12,4,4,4,4,8,12]
const Ck = 24
console.log("C", C)
console.log("Ck", Ck)
console.log("puzzle(C, Ck)", puzzle(C, Ck))

const D = [12, -12, -12, 12, -4, 16, -12]
const Dk = 0
console.log("D", D)
console.log("Dk", Dk)
console.log("puzzle(D, Dk)", puzzle(D, Dk))
