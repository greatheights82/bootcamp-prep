// YOUR CODE BELOW
const makeGrid = (numColumns, numRows) => {

    newGrid = [];

    for(let i = 0; i < numRows; i++) { 
        let currentRow = [];

        for(let j = 0; j < numColumns; j++) {
            currentRow.push(j+1);    
        }

        newGrid.push(currentRow);

    }

        return newGrid;

}