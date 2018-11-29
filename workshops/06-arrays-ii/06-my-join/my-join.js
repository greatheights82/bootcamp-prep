// YOUR CODE BELOW
const myJoin = (arr, separator = ',') => {

    newStr = '';

    for(let i = 0; i < arr.length-1; i++) { 

        currentElem = arr[i];

        if(currentElem === undefined || currentElem === null) {
            newStr += '' + separator;
        } else {
            newStr += currentElem + separator;
        }

    }

    newStr += arr[arr.length - 1];

    return newStr;

}