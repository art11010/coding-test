// CREMA

// 1. Eliminate Substring
// 2. Error Digit Range
// 3. Longest Subarray
// 4. String Chains
// 5. Minimum Tree Path

// 1.
// function getFinalString(s) {
//   // Write your code here

//   while (s.includes('AWS')) {
//     s = s.split('AWS').join('');
//   }
//   return s.length == 0 ? -1 : s;
// }
// console.log(getFinalString('AAWSWS'));

// 2.
// function findRange(num) {
//   // Write your code here
//   const numArray = Array.from(String(num), Number);
//   const firstDigit = numArray[0];

//   let maxNum = numArray.map((digit) => (digit === firstDigit ? 9 : digit));
//   let minNum = numArray.map((digit) => (digit === firstDigit ? 1 : digit));

//   if (firstDigit === 9) {
//     const notNineIndex = numArray.findIndex((digit) => digit !== 9);
//     if (notNineIndex !== -1) {
//       maxNum[notNineIndex] = 9;
//     }
//   }

//   if (firstDigit === 1) {
//     const notOneOrZeroIndex = numArray.findIndex((digit) => digit > 1);
//     if (notOneOrZeroIndex !== -1) {
//       minNum[notOneOrZeroIndex] = 0;
//     }
//   }

//   return Number(maxNum.join('')) - Number(minNum.join(''));
// }
// console.log(findRange(123512));

// 3.
// function maxLength(a, k) {
//   // Write your code here
//   function sumArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }

//   var resultArr = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j <= a.length; j++) {
//       console.log(i, j, a.slice(i, j));
//       if (j - i > resultArr.length && sumArr(a.slice(i, j)) <= k) {
//         resultArr = a.slice(i, j);
//       }
//     }
//   }
//   return resultArr.length;
// }
// console.log(maxLength([3, 1, 2, 1], 4));

// 4.
// function longestChain(words) {
//   // Write your code here
//   const wordMap = new Map();
//   for (const word of words) {
//     const length = word.length;
//     if (!wordMap.has(length)) {
//       wordMap.set(length, new Set());
//     }
//     wordMap.get(length).add(word);
//   }

//   const chainLengths = new Map();

//   words.sort((a, b) => a.length - b.length);

//   let longestChainLength = 0;

//   for (const word of words) {
//     let currentChainLength = 0;

//     for (let i = 0; i < word.length; i++) {
//       const prevWord = word.slice(0, i) + word.slice(i + 1);

//       if (chainLengths.has(prevWord)) {
//         currentChainLength = Math.max(
//           currentChainLength,
//           chainLengths.get(prevWord)
//         );
//       }
//     }

//     currentChainLength++;
//     chainLengths.set(word, currentChainLength);

//     longestChainLength = Math.max(longestChainLength, currentChainLength);
//   }

//   return longestChainLength;
// }
// console.log(
//   longestChain([
//     'a',
//     'zxb',
//     'ba',
//     'bca',
//     'bda',
//     'bdca',
//     'zxbe',
//     'azxbe',
//     'azxpbe',
//   ])
// );

// 5.
// function minimumTreePath(n, edges, visitNodes) {
//   // Write your code here
//   console.log(n, edges, visitNodes);

//   const graph = {};
//   for (let i = 1; i <= n; i++) {
//     graph[i] = [];
//   }
//   for (const [start, end] of edges) {
//     graph[start].push(end);
//     graph[end].push(start);
//   }

//   const queue = [visitNodes[0]];

//   const visited = new Set();
//   visited.add(visitNodes[0]);

//   let shortestPath = 0;

//   while (queue.length > 0) {
//     const currentNode = queue.shift();

//     if (currentNode === visitNodes[1]) {
//       break;
//     }

//     for (const adjacentNode of graph[currentNode]) {
//       if (!visited.has(adjacentNode)) {
//         queue.push(adjacentNode);
//         visited.add(adjacentNode);
//       }
//     }

//     shortestPath++;
//   }

//   return shortestPath;
// }

// console.log(
//   minimumTreePath(
//     3,
//     [
//       [1, 2],
//       [1, 3],
//     ],
//     [2]
//   )
// );
