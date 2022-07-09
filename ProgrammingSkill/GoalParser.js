/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let interpretedCommand = "";
    for(let i = 0; i < command.length;){
        if(command[i] === "G"){
            interpretedCommand += command[i];
            i = i + 1;
        }else if(command[i] === "(" && command[i+1] === ")"){
            interpretedCommand += "o";
            i = i + 2;
        }else{
            interpretedCommand += "al";
             i = i + 4;
        }   
    }
    return interpretedCommand;
};
