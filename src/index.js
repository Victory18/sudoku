function find(m, x, y) {
  var n = [0,0,0,0,0,0,0,0,0];

  for (var i = 0; i < 9; i++) {
    n[m[y][i]]++;
    n[m[i][x]]++;
    n[m[(3 * ((y/3)|0))+((i/3)|0)][(3 * ((x/3)|0))+(i%3)]]++;
  }

  if (n.indexOf(0) === n.lastIndexOf(0)) return n.indexOf(0);

  return 0;

}

module.exports = function solveSudoku(matrix) {
  do {
    var gap = 0;
    for (var y = 0; y < 9; y++) {
      for (var x = 0; x < 9; x++ ) {
        if (matrix[y][x] === 0) {
          matrix[y][x] = find(m, x, y);
          gap = matrix[x][y];
        }
      }
    }
  } while (gap);

  return matrix;
}

