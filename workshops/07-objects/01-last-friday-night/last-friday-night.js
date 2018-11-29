// YOUR CODE BELOW
const lastFridayNight = (myArr) => {

    let sum = 0;

    for(let i = 0; i < myArr.length; i++){
        currentTrans = myArr[i];

        sum += currentTrans.amount;

    }

    return sum;
}