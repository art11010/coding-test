function solution(s) {
  return s
    .split(' ')
    .map((itm) => itm.slice(0, 1).toUpperCase() + itm.slice(1).toLowerCase())
    .join(' ');
}