// YOUR CODE BELOW
const onlyOdds = (myNum) => {

    let sum = 0;

    for(let i = 1; i < myNum; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }

    return sum;
}