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
    
        else if (islandMarker(grid, currentPosition) === 0) {

            let up        = new Position(x, y - 1);
            let right     = new Position(x + 1, y);
            let down      = new Position(x, y + 1);
            let left      = new Position(x - 1, y);
            let upLeft    = new Position(x - 1, y - 1);
            let upRight   = new Position(x + 1, y - 1);
            let downLeft  = new Position(x - 1, y + 1);
            let downRight = new Position(x + 1, y + 1);

            // Check up
            if (y > 0 && !visited[y-1][x]) {
                queue.push({pos: up, steps: currentSteps + 1})
                visited[y-1][x] = true;
            }

            // Check right
            if (x < n - 1 && !visited[y][x+1]) {
                queue.push({pos: right, steps: currentSteps + 1})
                visited[y][x+1] = true;
            }

            // Check down
            if (y < n - 1 && !visited[y+1][x]) {
                queue.push({pos: down, steps: currentSteps + 1})
                visited[y+1][x] = true;
            }

            // Check left
            if (x > 0 && !visited[y][x-1]) {
                queue.push({pos: left, steps: currentSteps + 1})
                visited[y][x-1] = true;
            }
            
            // Check upLeft
            if (y > 0  && x > 0 && !visited[y-1][x-1]) {
                queue.push({pos: upLeft, steps: currentSteps + 1})
                visited[y-1][x-1] = true;
            }
            
            // check upRight
            if (y > 0  && x < n - 1 && !visited[y-1][x+1]) {
                queue.push({pos: upRight, steps: currentSteps + 1})
                visited[y-1][x+1] = true;
            }
            
            // check downleft
            if (y < n - 1  && x > 0 && !visited[y+1][x-1]) {
                queue.push({pos: downLeft, steps: currentSteps + 1})
                visited[y+1][x-1] = true;
            }
            
            // check downRight
            if (y < n - 1  && x < n - 1 && !visited[y+1][x+1]) {
                queue.push({pos: downRight, steps: currentSteps + 1})
                visited[y+1][x+1] = true;
            }
        }
    }

    return -1;
};

function islandMarker(map, position) {
  return map[position.y][position.x];
}