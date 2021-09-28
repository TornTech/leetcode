/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    const height = grid.length;
    const width = grid[0].length
    
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (!grid[row][col]) continue;
            const currentIslandSize = getIslandSize(grid, width, height, row, col);
            maxArea = Math.max(maxArea, currentIslandSize);
        }
    }
    
    return maxArea;
};

var getIslandSize = function(grid, width, height, row, col) {
    let islandSize = 1;
    grid[row][col] = 0;
    const directions = [[-1,0],[1,0],[0,-1],[0,1]];
    
    directions.forEach(direction => {
        const directionRow = direction[0];
        const directionCol = direction[1];
        
        const newCellRow = row + directionRow;
        const newCellCol = col + directionCol;
        
        if (withinBounds(width, height, newCellRow, newCellCol) && grid[newCellRow][newCellCol]) {
            islandSize += getIslandSize(grid, width, height, newCellRow, newCellCol);
        }
    })
    
    return islandSize;
}

var withinBounds = function(width, height, row, col) {
    return row >= 0 && row < height && col >= 0 && col < width;
}