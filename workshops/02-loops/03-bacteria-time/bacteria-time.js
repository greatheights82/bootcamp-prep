// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {

    let minutes = 0;

    if(targetNum < currentNum){
        return 'targetNum must be larger than currentNum';
    }

    for(let i = currentNum; i < targetNum; minutes += 20){
        i *= 2;
    }

    return minutes;
}   