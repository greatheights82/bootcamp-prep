// YOUR CODE BELOW
const removeColumns = (originalGrid, numColumns) => {

    for (let i = 0; i < originalGrid.length; i++) {

        let currentRow = originalGrid[i];

        for(let j = 0; j < numColumns; j++) {

            currentRow.pop();

        }
    }

    return originalGrid;

}