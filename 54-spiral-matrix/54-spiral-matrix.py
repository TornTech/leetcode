class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        output = []
        cols = len(matrix[0])
        rows = len(matrix)
        left,top = 0,0
        right, bottom = cols - 1, rows - 1
        
        while len(output) < cols * rows:
            if left == right and top == bottom:
                output.append(matrix[top][left])
                break
                
            for i in range(left, right): # Top
                output.append(matrix[top][i])
                if len(output) == cols * rows:
                    break
                    
            
            for i in range(top, bottom):
                output.append(matrix[i][right])
                if len(output) == cols * rows:
                    break
                
            for i in range(right, left, -1):
                output.append(matrix[bottom][i])
                if len(output) == cols * rows:
                    break
                
            for i in range(bottom, top, -1):
                output.append(matrix[i][left])
                if len(output) == cols * rows:
                    break
                    
            right -= 1
            left += 1
            top += 1
            bottom -=1
        
        return output
        