/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let flag = true;
    if(coordinates.length == 2){
        flag = true;
    }else{
        let slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
        if(coordinates[1][0] == coordinates[0][0]){
            for(let i = 2; i<coordinates.length;i++){
                if(coordinates[i][0] !== coordinates[i-1][0]){
                    flag = false;
                }
            }
        }else{
            for(let i = 2; i<coordinates.length;i++){
                let newSlope = (coordinates[i][1] - coordinates[i-1][1]) / (coordinates[i][0] - coordinates[i-1][0]);
                if(newSlope !== slope){
                    flag = false;
                }   
            }
        }
    }
    return flag;
};
