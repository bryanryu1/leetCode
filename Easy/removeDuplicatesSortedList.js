// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    if (!head){
        return head
    }
    let cur = head
    while(cur.next !== null){
        let next = cur.next
        if(cur.val === next.val){
           delete cur.val
        } else {
        cur = cur.next

        }
    }
    return head
}

// Not sure why linked lists are like this but you can't just increment to next using head. You must set some variable equal to head before attempting to change the values around. 
// While there is a next value in the linked list, set the variable next to current values next val. If the two values are equal delete the current value, and move on to the next value. Otherwise simply continue to check the next value. Once all values have been checked, return the head which should have now have no duplicate values. 
// Because the linked list is sorted, there is no need to do anything more than compare two values at a time.