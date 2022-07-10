var freqAlphabets = function(s) {
    let newString = ""
    for(let i = 0; i< s.length; i++){
        if(s[i+2] == "#"){
            newString += String.fromCharCode(Number(s[i] + s[i+1]) - 1 + 97);
            i = i + 2;
        }else{
            newString += String.fromCharCode(Number(s[i]) - 1 + 97);
        }
    }
    return newString;
};
