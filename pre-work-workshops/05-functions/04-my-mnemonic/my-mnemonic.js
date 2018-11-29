// YOUR CODE BELOW
const myMnemonic = (str1, str2, str3, str4) => {

    let newStr = '';

    if(!!str1){
        newStr += str1[0];
    }

    if(!!str2){
        newStr += str2[0];
    }

    if(!!str3){
        newStr += str3[0];
    }
    
    if(!!str4){
        newStr += str4[0];
    }

    return newStr;
}