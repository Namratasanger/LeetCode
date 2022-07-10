var toLowerCase = function(s) {
    for(let i = 0; i< s.length; i++){
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            s = s.slice(0,i) + String.fromCharCode(s.charCodeAt(i) + 32) + s.slice(i+1,s.length);
        }
    }
    return s;
};
