// YOUR CODE BELOW
const mySlice = (originalString, startIdx = 0, endIdx = originalString.length) => {

    newString = '';

    for(let i = startIdx; i < endIdx; i++){
        newString += originalString[i];
    }


    return newString;
}