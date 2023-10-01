function solution(today, terms, privacies) {
  const answer = [];

  const todayData = today.split('.');
  let count = 1;
  privacies.forEach((item) => {
    const itemSplit = item.split(' ');
    const dateSplit = itemSplit[0].split('.');
    for (let i = 0; i < terms.length; i++) {
      if (itemSplit[1] == terms[i][0]) {
        if (
          terms[i].split(' ')[1] * 28 <=
          (todayData[0] - dateSplit[0]) * 336 +
            (todayData[1] - dateSplit[1]) * 28 +
            (todayData[2] - dateSplit[2])
        ) {
          answer.push(count);
        }
      }
    }
    ++count;
  });
  return answer;
}