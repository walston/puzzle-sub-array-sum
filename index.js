function puzzle(array, k) {
  
  const length = array.length
  let count = 0
  let subArrays = []

  for (let L = length; L > 0; L--) {
    for (let i = 0; i <= length - L; i++) {

      let subArray = array.slice(i, L + i)

      if (sum(subArray) === k) {
        subArrays.push(subArray)
        count++
      }

    } 
  }

  return {
    count,
    subArrays
  }
}

function sum(array) {
  return array.reduce( (a, b) => a + b, 0)
}

module.exports = puzzle
