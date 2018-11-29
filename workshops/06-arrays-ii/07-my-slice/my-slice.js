// YOUR CODE BELOW
const mySlice = (originalArr, startIdx = 0, endIdx = originalArr.length) => {

    arrSlice = [];

    if(startIdx < 0) {
        startIdx = originalArr.length + startIdx;
    }

    if(endIdx < 0) {
        endIdx = originalArr.length + endIdx;
    }

    for(let i = startIdx; i < endIdx; i++) {
        arrSlice.push(originalArr[i]);

    }

    return arrSlice;
}