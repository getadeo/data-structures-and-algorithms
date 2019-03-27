// HackerRank Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

const diagonalDifferences = (arr) => {
  let leftToRightDiagonal = 0
  let rightToLeftDiagonal = 0

  for (let i = 0; i < arr.length; i++) {
    leftToRightDiagonal += arr[i][i];
    rightToLeftDiagonal += arr[arr.length - 1 - i][i]
  }
    return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}

let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

console.log(diagonalDifferences(matrix))
