// DESCRIPTION:
// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in
// an array or list of integers:
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum.
// Note that the empty list or array is also a valid sublist / subarray.

// Examples:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

const maxSequence = function (arr) {
  let max = Math.max(...arr);

  if (arr.length === 0 || max <= 0) {
    return 0;
  }

  const positiveIndex = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveIndex.push(i);
    }
  }

  for (let value of positiveIndex) {
    for (let i = value + 2; i <= arr.length; i++) {
      const sliceSum = arr
        .slice(value, i)
        .reduce((sum, index) => sum + index, 0);
      if (sliceSum > max) {
        max = sliceSum;
      }
    }
  }
  return max;
};
