class PhoneDirectory {
    /**
     * @param {number} maxNumbers
     */
    constructor(maxNumbers) {
        this.maxNumbers = maxNumbers;
        this.directory = new Array(maxNumbers).fill(false);
        this.nextAvailableNum = 0;
    }
    
    /**
     * @return {number}
     */
    get() {
        if (this.nextAvailableNum === this.maxNumbers) return -1;
        
        const numToGet = this.nextAvailableNum;
        this.directory[numToGet] = true;
        
        for (let i = numToGet + 1; i <= this.maxNumbers; i++) {    
            if (!this.directory[i]) {
                this.nextAvailableNum = i;
                break;
            }
        }
        return numToGet;
    }
    
    /** 
     * @param {number} number
     * @return {boolean}
     */
    check(num) {
        return !this.directory[num];
    }
    
    /** 
     * @param {number} number
     * @return {void}
     */
    release(num) {
        this.directory[num] = false;
        if (num < this.nextAvailableNum)
            this.nextAvailableNum = num;
    }
};


/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */