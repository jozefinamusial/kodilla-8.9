function drawTree(x) {
  for (var i = 1; i - 1 < x; i++) {
    var line = '';
    for (var n = 0; n < x - i; n++) {
      line += ' ';
    }
    for (var j = 0; j <= i * 2 - 2; j++) {
      line += '*';
    }
    console.log(line);
  }
}
drawTree(15);