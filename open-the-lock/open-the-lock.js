/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let queue = [{
        lock:"0000", 
        count:0
    }];
    
    let deadendsSet = new Set(deadends);
    let visited = new Set();
    
    while (queue.length) {
        let {lock, count} = queue.shift();
        
        if (lock === target) return count;

        if (!deadendsSet.has(lock)) {
            let currentLockArr = lock.split('')
            for (let i = 0; i < currentLockArr.length; i++) {

                // Scroll wheel up
                let newAttemptUpArr   = [...currentLockArr];
                newAttemptUpArr[i] = newAttemptUpArr[i] === '9' ? '0' : (Number(newAttemptUpArr[i]) + 1).toString();
                const newAttemptUpStr = newAttemptUpArr.join('');

                if (!visited.has(newAttemptUpStr)) {
                    visited.add(newAttemptUpStr);
                    queue.push({lock:newAttemptUpStr, count:count+1});
                }

                // Scroll wheel down
                let newAttemptDownArr = [...currentLockArr];
                newAttemptDownArr[i] = newAttemptDownArr[i] === '0' ? '9' : (Number(newAttemptDownArr[i]) - 1).toString();
                const newAttemptDownStr = newAttemptDownArr.join('');

                if (!visited.has(newAttemptDownStr)) {
                    visited.add(newAttemptDownStr);
                    queue.push({lock:newAttemptDownStr, count:count+1});
                }
            }
        }
    }
    
    return -1;
};