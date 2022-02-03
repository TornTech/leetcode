class Solution:
    def isValid(self, s: str) -> bool:
        par_dict = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        
        stack = []
        
        for par in s:
            if par in par_dict:
                if (len(stack) > 0 and stack[-1] == par_dict[par]):
                    stack.pop()
                else:
                    return False
            else:
                stack.append(par)
                
        return len(stack) == 0
            
        