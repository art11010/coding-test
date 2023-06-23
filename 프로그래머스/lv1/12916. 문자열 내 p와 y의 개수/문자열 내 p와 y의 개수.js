function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "p" || s[i] === "P"
      ? pCount++
      : s[i] === "y" || s[i] === "Y"
      ? yCount++
      : null;
  }

  return pCount === yCount;
}