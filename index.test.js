const puzzle = require('./index.js')

const A = [1,2,3,4,5,6,7,8]
const Ak = 8
console.log(puzzle(A,Ak))

const B = [8,2,10,3,7]
const Bk = 10
console.log(puzzle(B, Bk))

const C = [12,12,12,4,4,4,4,8,12]
const Ck = 24
console.log(puzzle(C, Ck))

const D = [12, -12, -12, 12, -4, 16, -12]
const Dk = 0
console.log(puzzle(D, Dk))

const E = ( length => {
  let Ea = []
  while (Ea.length < length) {
    Ea.push(Math.floor(Math.random() * length * 2) - length)
  }
  return Ea
})(100)
const Ek = 130
console.log(puzzle(E, Ek))
