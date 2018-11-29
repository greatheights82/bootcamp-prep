// YOUR CODE BELOW
const isTruthy = (myArg) => {
 
    if(myArg === false){
        return 'The boolean value false is falsey';
    } else if (myArg === null){
        return 'The null value is falsey';
    } else if (myArg === undefined){
        return 'undefined is falsey';
    } else if (myArg === 0){
        return 'The number 0 is falsey (the only falsey number)';
    } else if (myArg === ''){
        return 'The empty string is falsey (the only falsey string)';
    } else return true;


}