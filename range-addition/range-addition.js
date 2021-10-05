/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    const arr = new Array(length).fill(0);
    
    for (let i = 0; i < updates.length; i++) {
        const currentUpdate = updates[i];
        const startIdx = currentUpdate[0];
        const endIdx = currentUpdate[1];
        const inc = currentUpdate[2];
        
        for (let j = startIdx; j <= endIdx; j++) {
            arr[j] += inc;
        }
    }
    
    return arr;
};