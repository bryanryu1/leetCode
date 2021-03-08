// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself

var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0)
    let current = list
    
    let sum = 0
    let carry = 0
    
    while(l1 !== null || l2 !== null || sum > 0){
        if (l1 !== null){
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null){
            sum += l2.val
            l2 = l2.next
        }
        carry = (sum >= 10) ? 1 : 0
        sum = sum % 10
        
        current.next = new ListNode(sum)
        current = current.next
        
        sum = carry
        carry = 0
    }
    return list.next
};

//My first medium challenge! 

//Solution looks scarier than it is. Create new listnode to store answer and set a variable equal to that list node because you can't alter a listnode directly. If neither l1 nor l2 are null, add both values to the sum value. If sum is larger than 10 let carry = 1 because you need to carry it over to the next addition set. Then set sum = to the modulo 10. The next value of current is set to equal a new ListNode = to sum and the current value becomes current.next. Let sum = carry because the next addition should start with the carry value and set carry to 0. 
//At the end return list.next as list starts with 0. This should return the addition value as a linked list.
