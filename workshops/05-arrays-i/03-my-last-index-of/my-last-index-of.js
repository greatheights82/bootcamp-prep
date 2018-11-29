// YOUR CODE BELOW
const myLastIndexOf = (myArr, searchVal, startIdx = myArr.length-1) => {

    let lastIdx;
    
    for(let i = startIdx; i >= 0 ; i--){
        console.log(startIdx);
        if(myArr[i] === searchVal){
            return i;
        } 
    }

    return -1;
}