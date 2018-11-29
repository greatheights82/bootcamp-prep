// YOUR CODE BELOW
const zooInventory = (animalFacts) => {

    let sentenceArray = [];

    for(let i = 0; i < animalFacts.length; i++) {

        let currentAnimal = animalFacts[i];
        let currentSentence = `${currentAnimal[0]} the ${currentAnimal[1][0]} is ${currentAnimal[1][1]}.`;

        sentenceArray.push(currentSentence);
    }

    return sentenceArray;

}