// YOUR CODE BELOW
const evenAndOdd = (myArr) => {

    evenArr = [];
    oddArr = [];

    for(let i = 0; i < myArr.length; i++){
        if(myArr[i] % 2 === 0){
            evenArr.push(myArr[i]);
        } else oddArr.push(myArr[i]);
    
    }

    return [evenArr, oddArr];
}