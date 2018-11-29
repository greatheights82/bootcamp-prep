// YOUR CODE BELOW
const myIncludes = (myArr, searchVal) => {

    for(let i = 0; i < myArr.length; i++){
        if(myArr[i] === searchVal){
            return true;
        }
    }
    
    return false;
}