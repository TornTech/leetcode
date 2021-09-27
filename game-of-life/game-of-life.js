/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const height = board.length;
    const width = board[0].length;
    
    const nextState = new Array(height).fill().map(() => new Array(width).fill(0));
    
    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            const currentCell = board[row][column];
            const numOfLiveNeighbors = numberOfLiveNeighbors(board, width, height, row, column);
            if (numOfLiveNeighbors < 2) {
                nextState[row][column] = 0;
            } else if (numOfLiveNeighbors === 2 || (numOfLiveNeighbors == 3 && currentCell)) {
                nextState[row][column] = currentCell;
            } else if (numOfLiveNeighbors > 3) {
                nextState[row][column] = 0;
            } else if (numOfLiveNeighbors === 3 && !currentCell) {
                nextState[row][column] = 1;
            }
        }
    }    
    
    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            board[row][column] = nextState[row][column];
        }
    }
};

var numberOfLiveNeighbors = function(board, width, height, row, column) {
    const neighbours = [[-1,-1],[-1,0],[-1,1],
                        [ 0,-1],       [ 0,1],
                        [ 1,-1],[ 1,0],[ 1,1]];
    
    let numOfLiveNeighbors = 0;

    neighbours.forEach(neighbor => {
        const y = neighbor[0]
        const x = neighbor[1];
        const newRow = row + y;
        const newColumn = column + x;
        if (withinDimension(board, width, height, newRow, newColumn)) {
            const newCell = board[newRow][newColumn];
            if (newCell) numOfLiveNeighbors++;
        }
    });
    
    return numOfLiveNeighbors;
}

var withinDimension = function(board, width, height, row, column) {
    return (row >= 0 && row < height && column >= 0 && column < width);
}

