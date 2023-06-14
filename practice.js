// 1. 세 수 중 최솟값 구하기
// function solution(a, b, c) {
//   return Math.min(a, b, c);
// }
// console.log(solution(2, 5, 1));

// 2. 삼각형 판별하기
// 삼각형이 되는 조건 : 가장 큰 값 < 나머 주 값의 합
// function solution(a, b, c) {
//   const sum = a + b + c;
//   const max = Math.max(a, b, c);
//   return max < sum - max ? 'YES' : 'NO';
// }
// console.log(solution(6, 7, 11));
// console.log(solution(13, 33, 17));

// 3. 홀수
// 배열 내의 숫자들 중 홀수값들만의 합과 홀수값들 중 최솟값을 구하라
// function solution(arr) {
//   let sum = 0;
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(arr[i]);
//       sum += arr[i];
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//   }
//   return `${sum} ${min}`;
// }
// console.log(solution([12, 77, 38, 41, 53, 92, 85]));

// 4. 10부제
// 배열 숫자내의 일의 자리 수와 인자 첫번째 값과 일치하는 숫자들의 갯수를 구하라
// function solution(day, arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 10 === day) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
// console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));

// 5, 일곱난장이
// 9개의 숫자들 중 7개의 합이 100이어야 한다. 100이 되지 못하는 두 숫자를 제외한 배열을 return 하라
// function solution(arr) {
//   let sum = arr.reduce((prev, current) => prev + current);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (sum - (arr[i] + arr[j]) === 100) {
//         arr.splice(j, 1);
//         arr.splice(i, 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
