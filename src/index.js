module.exports = function solveSudoku(matrix) {
  do {
    var gap = 0;
    for (var x = 0; x < 9; x++) {
      for (var y = 0; y < 9; y++ ) {
        if (matrix[x][y] === 0) {
          matrix[x][y] = find(m, x, y);
          gap = matrix[x][y];
        }
      }
    }
  } while (gap);

  return matrix;
}

function find(m, x, y) {
  var n = [0,0,0,0,0,0,0,0,0];
  
  for (var i = 0; i < 9; i++) {
    n[m[i][y]]++;
    n[m[x][y]]++;
    n[m[x%3 + i/3|0][y%3 + i/3|0]]++;
  }

  if(n.indexOf(0) === n.lastIndexOf(0)) return 0;

}
