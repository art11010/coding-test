function solution(s) {
  let cutNum = s.length % 2 === 0 ? 2 : 1;
  let halfNum = s.length / 2;

  s.length % 2 === 0 && halfNum--;

  return s.substr(halfNum, cutNum);
}