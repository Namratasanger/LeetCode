/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let loopLength =  mat[0].length % 2 == 0 ? Math.floor(mat[0].length / 2) : Math.floor(mat[0].length / 2) + 1;
    for(let i = 0;i < loopLength; i++){
        if(i == mat[i].length - 1 -i){
            sum += mat[i][i];
        }else{
            sum += mat[i][i] + mat[i][mat[i].length - 1 - i] + mat[mat[0].length - 1 - i][i] + mat[mat[0].length - 1 - i][mat[i].length - 1 - i];     
        }
    }
    return sum;
};
