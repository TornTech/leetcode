/**
 * @param {number} capacity
 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        
        return -1;
    }
    
    put(key, value) {
        this.cache.delete(key);
        this.cache.set(key, value);
        
        if (this.cache.size > this.capacity) {
            const cacheIterator = this.cache.keys();
            const oldestKey = cacheIterator.next().value;
            this.cache.delete(oldestKey);
        }
    }
} 