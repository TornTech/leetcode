class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longest_prefix = strs[0] 
        
        for string in strs:
            new_longest_prefix = ""
            for i in range(len(longest_prefix)):
                if i >= len(string):
                    break
                    
                longest_prefix_char = longest_prefix[i]  
                string_char = string[i]                  
                
                if longest_prefix_char == string_char:
                    new_longest_prefix += string_char  
                else:
                    break
                    
            longest_prefix = new_longest_prefix
                
        return longest_prefix