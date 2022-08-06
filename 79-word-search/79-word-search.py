class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        self.cols = len(board[0])
        self.rows = len(board)
        self.board = board
        
        for col in range(self.cols):
            for row in range(self.rows):
                if self.traverse(col, row, word):
                    return True
                
        return False
                

    def traverse(self, col, row, word):
        if word == "":
            return True
        
        if (col < 0 or col == self.cols or row < 0 or row == self.rows or self.board[row][col] != word[0]):
            return False
        
        self.board[row][col] = "#"
        result = False
        
        for next_col,next_row in [(col-1, row),(col+1, row),(col, row-1),(col, row+1)]:
            result = self.traverse(next_col, next_row, word[1:])
            if result:
                break
                
        self.board[row][col] = word[0]
        
        return result