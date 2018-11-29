// YOUR CODE BELOW
const arrayFlattener = (myArr) => {

    let newArr = [];

    // for(let i = 0; i < myArr.length; i++){
    //     if (Array.isArray(myArr[i])) {
    //         newArr.concat(arrayFlattener(myArr[i]));
    //     } else newArr.push(myArr[i]);
    // } 

    for(let i = 0; i < myArr.length; i++){
        if (Array.isArray(myArr[i])) {
            for (let j = 0; j < myArr[i].length; j ++) { 
                newArr.push(myArr[i][j]);
            } 
        } else newArr.push(myArr[i]);
    } 

    return newArr;

}