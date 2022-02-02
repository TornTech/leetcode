class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longest_operator = ""
        
        for tup in zip(*strs):
            if (sorted(tup) == sorted(tup)[::-1]):
                longest_operator += tup[0]
            else:
                return longest_operator
        
        return longest_operator