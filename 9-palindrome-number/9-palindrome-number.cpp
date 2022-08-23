class Solution {
public:
    bool isPalindrome(int x) {
        long reversedNum = 0;
        int originalNum = x;
        
        while (x > 0) {
            int remainder = x % 10;
            x /= 10;
            reversedNum = (reversedNum * 10) + remainder;
        }
        
        return reversedNum == originalNum;
    }
};