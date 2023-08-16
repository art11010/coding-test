process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ')[0];
  const m = data.split(' ')[1];

  let star = '';
  for (let i = 0; i < m; i++) {
    let s = '';
    for (let j = 0; j < n; j++) {
      s += '*';
    }
    star += s + '\n';
  }
  console.log(star)
});