class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        
        result = []
        
        def dfs(curr, path_so_far, visited):
            visited_copy = visited.copy()
            path_so_far_copy = path_so_far.copy()
            # print("curr:", curr, "path_so_far:", path_so_far, "visited:", visited)
            path_so_far_copy.append(curr)
            visited_copy.add(curr)
            
            if curr == len(graph) - 1:
                result.append(path_so_far_copy)
                return
            else:
                to_visit = graph[curr]
                for curr_visit in to_visit:
                    if curr_visit in visited_copy:
                        continue
                    dfs(curr_visit, path_so_far_copy, visited_copy)
                    
        dfs(0, [], set())
        return result