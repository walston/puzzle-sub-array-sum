function puzzle(array, k) {
  let hashMap = {}
  let count = 0
  let current = 0

  for (let index = 0; index < array.length; index++) {
    current += array[index]
    hashMap[current] = hashMap[current] ? hashMap[current] + 1 : 1

    if (current === k) {
      count++
    }

    if (hashMap[current - k]) {
      count += hashMap[current - k]
    }
  }

  return count;
}

module.exports = puzzle
