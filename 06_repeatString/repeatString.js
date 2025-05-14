const repeatString = function(word, repeatAmount) {
    let repeated =  "";
    if(repeatAmount < 0){
        return "ERROR";
    }
    for(let i = 0; i < repeatAmount; i++){
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
