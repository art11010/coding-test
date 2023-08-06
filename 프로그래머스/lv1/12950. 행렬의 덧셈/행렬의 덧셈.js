function solution(arr1, arr2) {
  return arr1.map((itm1, idx1) =>
    itm1.map((itm2, idx2) => itm2 + arr2[idx1][idx2]),
  );
}