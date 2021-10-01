function sumArray(arr) {
  let sortedArr = arr.sort((a, b)=> {
    return a - b;
  });
  let largestNum = sortedArr.pop();

  let num = 0;
  sortedArr.forEach(item => (num += item));
  return largestNum === num;
}

console.log(sumArray([1,6,4,2,13]));
console.log(sumArray([1,2,4,34,22]));