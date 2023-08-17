function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr[newArr.length - 1] === arr[i]) {
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}