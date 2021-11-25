import { log } from "../../helpers";
import { list1, list2, ListNode } from "../LinkedList";

log('Original Linked Lists:', 'yellow')
log(list1);
log(list2);
log('Merged Linked List:', 'yellow')
log(mergeLinkedLists(list1, list2));



function mergeLinkedLists(l1: ListNode | null, l2: ListNode | null) {
  /*
    Pseudo Code
    1. Create a new merge Linked List
    2. Compare l1.val with l2.val 
    .  and based on that put the value on the merge 
    .  and reduce the lX which val we keep
    3. Edge cases: l1 or l2 null or l1 and l2 still remains
    4. Return the final merge
  */
  
  
  const merge = new ListNode();
  let current = merge;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.val = l1.val;
      current.next = new ListNode();

      current = current.next;
      l1 = l1.next;
    } else {
      current.val = l2.val;
      current.next = new ListNode();

      current = current.next;
      l2 = l2.next;
    }
  }

  if (l1) {
    current.val = l1.val;
    current.next = l1.next;
  } else if (l2) {
    current.val = l2.val;
    current.next = l2.next;
  }

  return merge;
}

/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]

Example 2:
  Input: list1 = [], list2 = []
  Output: []

Example 3:
  Input: list1 = [], list2 = [0]
  Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/