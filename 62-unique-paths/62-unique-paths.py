class Solution:
    def uniquePaths(self, cols: int, rows: int) -> int:
        seen = [[1 for i in range(rows)] for j in range(cols)]
        
        for col in range(1, cols):
            for row in range(1, rows):
                seen[col][row] = seen[col-1][row] + seen[col][row-1]

        return seen[cols-1][rows-1]
        