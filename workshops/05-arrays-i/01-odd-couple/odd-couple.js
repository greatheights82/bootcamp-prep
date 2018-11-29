// YOUR CODE BELOW
const oddCouple = (arr) => {

    oddArray = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0 && oddArray.length < 2){
            oddArray.push(arr[i]);

        }
    }

    return oddArray;
}