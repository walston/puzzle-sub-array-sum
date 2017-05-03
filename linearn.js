function puzzle(array, k) {
  const length = array.length

  let hashMap = {}
  let subArrays = []
  let current = 0

  for (let index = 0; index < length; index++) {
    current += array[index]

    if (current === k) {
      subArrays.push(array.slice(0, index + 1))
    }

    if (!hashMap[current]) {
      hashMap[current] = [index+1]
    }
    else {
      hashMap[current].push(index+1)
    }

    if (hashMap[current - k]) {
      subArrays.push(...hashMap[current - k].map(
        startIndex => array.slice(startIndex, index+1)
      ))
    }
  }

  return {
    count: subArrays.length,
    arrays: subArrays
  }
}

module.exports = puzzle

// think algebraically
