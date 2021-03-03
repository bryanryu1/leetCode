// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

function mergeTwoLists(L1, L2) {
  
    // create new linked list pointer
    var L3 = new ListNode(null, null);
    var prev = L3;
    
    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
      if (L1.val <= L2.val) { 
        prev.next = L1;
        L1 = L1.next;
      } else {
        prev.next = L2;
        L2 = L2.next;
      }
      prev = prev.next;
    }
    
    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (L1 === null) { prev.next = L2; }
    if (L2 === null) { prev.next = L1; }
    
    // return the sorted linked list
    return L3.next;
    
  }

  // The solution is explained in the code. The only tricky part about this solution is the fact that the L3 Node .next is returned because the actual L3 node starts with a null value. If you were to return just l3 it would be [null, rest, of, numbers, in, the, linked list].