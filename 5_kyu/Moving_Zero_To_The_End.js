// [DESCRIPTIONS]
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// [Examples]
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const copyArr = Object.assign([], arr);

  while (1) {
    const result = copyArr.findIndex((zero) => zero === 0);
    if (result === -1) break;

    copyArr.splice(result, 1);
    arr.splice(result, 1);
    arr.push(0);
  }
  return arr;
}
