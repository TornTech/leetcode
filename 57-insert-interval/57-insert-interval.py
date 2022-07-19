class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        intervals.append(newInterval)
        intervals.sort()
    
        new_list = [intervals[0]]
        
        for i in range(1,len(intervals)):
            curr = intervals[i]
            
            if new_list[-1][1] < curr[0]:
                new_list.append(curr)
                continue
                
            if curr[1] > new_list[-1][1]:
                new_list[-1][1] = curr[1]
                        
        return new_list