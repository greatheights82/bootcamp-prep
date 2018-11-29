// YOUR CODE BELOW
const maxOfThree = (num1, num2, num3) => {

// return Math.max(num1, num2, num3);

let max;

if(num1 > num2 && num1 > num3){
    max = num1;
} else if (num2 > num3 && num2 > num1){
    max = num2;
} else max = num3;

return max;

}