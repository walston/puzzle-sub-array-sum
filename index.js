function puzzle(array, k) {
  
  const length = array.length
  let count = 0
  let subArrays = [];

  for (let L = length; L > 0; L--) {
    for (let i = 0; i <= length - L; i++) {

      let subArray = array.slice(i, L + i);
      console.log(subArray)

      if (sum(subArray) === k) {
        subArrays.push(subArray);
        count++;
      }

    } 
  }

  return {
    count,
    subArrays
  }
}

function sum(array) {
  return array.reduce( (a, b) => a + b, 0);
}

const A = [1,2,3,4,5,6,7,8]
const Ak = 8
console.log(puzzle(A,Ak))

const B = [8,2,10,3,7]
const Bk = 10
console.log(puzzle(B, Bk))

const C = [12,12,12,4,4,4,4,8,12]
const Ck = 24
console.log(puzzle(C, Ck))

