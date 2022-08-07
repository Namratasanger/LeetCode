/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    let n = mat.length - 1;
    let count = 0;
    let flag = false;
    let elements = true;
        for(let i=0; i<=n;i++){
            for(let j=0;j<=n; j++){
                if(mat[i][j] != target[i][j]){
                    elements = false;
                    break;
                }
            }
        }
    flag = elements;
    while(count!=3 && !flag){
        
        // swapping rows with columns
        for(let i=0; i<=n;i++){
            for(let j=0; j<=n;j++){
                if(i>=j){
                    let temp = mat[i][j];
                    mat[i][j] = mat[j][i];
                    mat[j][i] = temp;   
                }
            }
        }
        
        console.log("Matrix : ", mat);

        // reverse the rows
        for(let i=0; i<=n;i++){
            for(let j=0; j<=Math.floor(n/2);j++){
                let temp=mat[i][j];
                mat[i][j] = mat[i][n-j];
                mat[i][n-j] = temp;
            }
        }
    
//         console.log("Rotated matrix : ",mat);
//         console.log("Traget matrix : ",target);
        
        //checking the resultant matrix
        let elements = true;
        for(let i=0; i<=n;i++){
            for(let j=0;j<=n; j++){
                if(mat[i][j] != target[i][j]){
                    elements = false;
                    break;
                }
            }
        }
        flag = elements;
        count++;
    }
    return flag;
};
