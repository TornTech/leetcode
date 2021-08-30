/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let width  = grid[0].length;
    let height = grid.length;
    let numIslands = 0;
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === "1") {
                numIslands++;
                floodIsland(x, y);
            }
        }
    }
    
    function floodIsland(x, y) {
        if (x < width && y < height && x >= 0 && y >= 0 && grid[y][x] === "1") {
            grid[y][x] = "0";
            floodIsland(x-1,y);
            floodIsland(x+1,y);
            floodIsland(x,y-1);
            floodIsland(x,y+1);
        }
    }
    
    return numIslands;
};