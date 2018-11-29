// YOUR CODE BELOW
const crazyCaps = (myStr) => {

    lowerStr = myStr.toLowerCase();
    let crazyStr = '';


    for(let i = 0; i < lowerStr.length; i++){


        if(i % 2 !== 0){
            crazyStr += lowerStr[i].toUpperCase();
        } else crazyStr += lowerStr[i];
    }

    return crazyStr;

}