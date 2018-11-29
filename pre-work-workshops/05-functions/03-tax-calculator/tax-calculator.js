// YOUR CODE BELOW
const taxCalculator = (price, state) => {
    if(state === 'NY'){
        return price*1.04;
    } else return price*1.06625;
}