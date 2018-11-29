// YOUR CODE BELOW
const exponentiate = (base, power) => {

    let exponent = base;

    if(power === 0){
        exponent = 1;

    } else {
        for(let i = 1; i < power; i++){
            exponent *= base;    
        }
    }

    return exponent;

}