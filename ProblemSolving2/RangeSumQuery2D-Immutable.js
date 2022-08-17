/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    NumMatrix.prototype.matrix = matrix;
    // pre-processing the data
    for(let i = 0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            let top = i-1 >= 0 ? matrix[i-1][j] : 0;
            let left = j-1 >=0 ? matrix[i][j-1] : 0;
            let diagonal = i-1>=0 && j-1>=0 ? matrix[i-1][j-1] : 0;
            matrix[i][j] = top + left - diagonal + matrix[i][j];
        }
    }
    console.log(matrix);
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  
    let matrix = NumMatrix.prototype.matrix;
    let topArea = row1-1 >=0 ? matrix[row1-1][col2] : 0;
    let leftArea = col1-1 >=0 ? matrix[row2][col1-1] : 0;
    let diagonal = row1-1>=0 && col1-1>=0 ? matrix[row1-1][col1-1] : 0;
    // console.log("topArea:",topArea);
    // console.log("leftArea:",leftArea);
    // console.log("diagonal:",diagonal);
    return matrix[row2][col2] - topArea - leftArea + diagonal;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
