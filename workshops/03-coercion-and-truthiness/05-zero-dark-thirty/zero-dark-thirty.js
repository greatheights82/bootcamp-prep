// YOUR CODE BELOW
const zeroDarkThirty = (myNum) => {

    newString = '';

    if(myNum === 0){
        return NaN;
    }

    myNum = String(myNum);

    for(let i = 0; i < myNum.length; i++){
        if(myNum[i] !== '0'){
            newString += String(myNum[i]);
        }
    }

    return Number(newString);

}