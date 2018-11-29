// YOUR CODE BELOW


const rotateArray = (origArr, rotateNum) => {

    let arrCopy = origArr;

    if(rotateNum > 0) {

        for(let i = 0; i < rotateNum; i++) {

            let currElem =  arrCopy.pop();
            arrCopy.unshift(currElem);

        }
    } else if(rotateNum < 0) {

        for(let i = 0; i < Math.abs(rotateNum); i++) {

            let currElem = arrCopy.shift();
            arrCopy.push(currElem);
        }
    }

    return arrCopy;

}