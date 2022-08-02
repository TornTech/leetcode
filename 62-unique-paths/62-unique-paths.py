class Solution:
    def uniquePaths(self, cols: int, rows: int) -> int:
        seen = [[0 for i in range(rows)] for j in range(cols)]
        
        for row in range(rows):
            seen[0][row] = 1
        for col in range(cols):
            seen[col][0] = 1
        
        for col in range(cols):
            for row in range(rows):
                if (col == 0):
                    seen[col][row] = seen[col][row-1]
                elif (row == 0):
                    seen[col][row] = seen[col-1][row]
                else:
                    seen[col][row] = seen[col-1][row] + seen[col][row-1]

        return seen[cols-1][rows-1]
        