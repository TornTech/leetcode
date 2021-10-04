class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums.sort((a,b) => a-b);
        this.k = k;
        
        if (!nums.length) {
            this.kthElement = -Infinity;
        } else if (this.k > this.nums.length) {
            this.kthElement = this.nums[0];
        } else {
            this.kthElement = nums[(nums.length - 1) - k + 1];
        }
    };
    
    /** 
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums.sort((a,b) => a-b);   
        
        if (this.k <= this.nums.length || val > this.kthElement) {
            this.kthElement = this.nums[this.nums.length - this.k];
        } else {
            this.kthElement = this.nums[0]
        }
            
        return this.kthElement;
    }
    
        
}



/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

[2, 3, 4, 4, 5, 5, 8, 9, 10]