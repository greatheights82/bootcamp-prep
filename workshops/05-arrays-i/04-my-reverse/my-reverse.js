// YOUR CODE BELOW
const myReverse = (myArr) => {

    revArr = [];

    for(let i = myArr.length; i > 0; i--){
        revArr.push(myArr[i-1]);
    }

    return revArr;
}