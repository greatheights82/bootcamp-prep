// YOUR CODE BELOW
const mostVowels = (myStr) => {

    let vowels = 'aeiouAEIOU';
    
    let currentWord = '';
    let currentCount = 0;

    let maxWord = '';
    let maxCount = 0;

    for(let i = 0; i < myStr.length; i++){
        if(myStr[i] !== ' ' &&  i !== myStr.length - 1){
            currentWord += myStr[i];
            console.log(currentWord);

            if(vowels.includes(myStr[i])){
                currentCount ++;
            }
        } else {
            if(currentCount > maxCount){
                maxCount = currentCount;
                maxWord = currentWord;
            }

            currentWord = '';
            currentCount = 0;
        }
    }

    return maxWord;


}