/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let minWeight = Math.max(...weights);
    let maxWeight = weights.reduce((acc, num) => acc + num, 0);
    
    while (minWeight < maxWeight) {
        let currentWeight = Math.floor((maxWeight + minWeight) / 2)
        let requiredDays = checkRequiredDays(weights, days, currentWeight)
        requiredDays <= days ? maxWeight = currentWeight : minWeight = currentWeight + 1;
    }
    
    return minWeight;
};

var checkRequiredDays = function (weights, days, shipCapacity) {
    let currentShipCapacity = shipCapacity;
    let daysRequired = 1;
    
    for (let i = 0; i < weights.length; i++) {
        let currWeight = weights[i];
        if (currentShipCapacity >= currWeight) {
            currentShipCapacity -= currWeight
        } else {
            daysRequired++;
            currentShipCapacity = shipCapacity - currWeight;
        }
    }
    
    return daysRequired;
}