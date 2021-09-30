/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let numOfRoomsVisited = 0;
    let roomQueue = [0];
    let roomSet = new Set([0]);
    
    while (roomQueue.length) {
        numOfRoomsVisited++;
        const roomIndex = roomQueue.pop();
        const roomKeys = rooms[roomIndex];
        roomKeys.forEach(key => {
            if (!roomSet.has(key)) {
                roomQueue.push(key);
                roomSet.add(key);
            }
        })
    }
    
    return numOfRoomsVisited === rooms.length;
};