/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visitedCities = new Array(n).fill(false);
    const visitedCitiesSet = new Set([0]);
    let numCitiesVisited = 0;
    let numProvinces = 1;
    const citiesToVisit = [0];

    while (citiesToVisit.length) {
        const cityIndexToVisit = citiesToVisit.pop();
        numCitiesVisited++;
        visitedCities[cityIndexToVisit] = true;
        visitedCitiesSet.add(cityIndexToVisit);
        const cityToVisit = isConnected[cityIndexToVisit];
        
        for (let i = 0; i < n; i++) {
            const currentCityConnectedToCityI = cityToVisit[i];
            if (currentCityConnectedToCityI && !visitedCitiesSet.has(i)) {
                citiesToVisit.push(i);
                visitedCitiesSet.add(i)
            }
        }

        // If not all cities visited yet, check next unvisited city
        if (!citiesToVisit.length && numCitiesVisited < n) {
            numProvinces++;
            const nextCityToVisit = nextUnvisitedCity(visitedCities);
            citiesToVisit.push(nextCityToVisit);
        }
    };
    
    return numProvinces;
};

var nextUnvisitedCity = function(visitedCities) {
    for (let i = 0; i < visitedCities.length; i++) {
        if (!visitedCities[i]) {
            return i;
        }
    }
    return -1;
}