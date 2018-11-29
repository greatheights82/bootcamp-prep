// YOUR CODE BELOW
const compareObjects = (obj1, obj2) => {

    let match;
    
    for(let key in obj1){
        if(obj1.key === obj2.key){
           match = true; 
        } else return false;
    }

    return match;
}