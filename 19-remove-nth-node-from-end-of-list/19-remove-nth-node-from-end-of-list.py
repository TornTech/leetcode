# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getListLength(self, head: Optional[ListNode]):
        length = 0
        pointer = head
        
        while (pointer):
            length += 1
            pointer = pointer.next
            
        return length
    

    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        length = self.getListLength(head)
        posToDelete = length - n
        if length == 1: return None
        if length == n: return head.next
        
        pointer = head
        
        while posToDelete - 1 > 0:
            if pointer:
                pointer = pointer.next
            posToDelete -= 1
            
        pointer.next = pointer.next.next
        
        return head
    
    