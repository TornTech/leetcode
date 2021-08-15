/**
 * @param {number[][]} grid
 * @return {number}
 */

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

var shortestPathBinaryMatrix = function(grid) {

    let queue = [{
        pos: new Position(0,0),
        steps: 1
    }];
  
    let n = grid.length;
    
    if (grid[n-1][n-1] === 1) return -1;
    
    let visited = new Array(n).fill(false).map(() => new Array(n).fill(false));
    const possibleDirections = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]];
    let steps = 1;

    while (queue.length) {
    
        let location = queue.shift();
        let currentPosition = location.pos;
        let x = currentPosition.x;
        let y = currentPosition.y;
        let currentSteps = location.steps;

        // Check if reached Destination
        if (y === n-1 && x === n-1) {
            return currentSteps;
        } 
    
        else if (grid[y][x] === 0) {
            for (const [dx, dy] of possibleDirections) {
                let newX = dx + x;
                let newY = dy + y;
                
                if (isWithinBounds(grid, newX, newY) && visited[newY][newX] === false) {
                    queue.push({pos: new Position(newX, newY), steps: currentSteps + 1});
                    visited[newY][newX] = true;
                }
            }
        }
    }

    return -1;
};

function isWithinBounds(grid, x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid.length;
}
