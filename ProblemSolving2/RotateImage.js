/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function(matrix) {
    let n = matrix.length - 1;
    
    // reversing the rows
    for(let i=0; i<=n; i++){
        for(let j=0; j<=Math.floor(n/2);j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-j];
            matrix[i][n-j] = temp;
        }
    }
    
    // swaping the terms to get 90 degree rotated array
    for(let i=0;i<=n;i++){
        for(let j=0;j<=(n-1-i);j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-j][n-i];
            matrix[n-j][n-i] = temp;
        }
    }
    
    return matrix;
};
