function sumArray(arr) {
  let sortedArr = arr.sort((a, b)=> {
    return a - b;
  });
  let largestNum = sortedArr.pop();

  let num = 0;
  tempArr.forEach(item => (num += item));
  return largestNum === num;
}