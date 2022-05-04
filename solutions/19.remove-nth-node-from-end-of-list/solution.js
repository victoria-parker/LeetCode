/* 19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 */

var removeNthFromEnd = function(head, n) {

    let endPointer=head
    let prev=head


    while(n !== 0){
        endPointer=endPointer.next
        n--
    }


    if(endPointer === null){
        head=prev.next
        return head
    }

    while(endPointer.next !== null){

        endPointer=endPointer.next
        prev=prev.next

    }

    let nextN=prev.next.next
    prev.next=nextN    

    return head
}


//TEST

class Node{
    constructor(data){
        this.val=data;
        this.next=null
    }
}

const one=new Node(1)
const two=new Node(2)
const three=new Node(3)
const four=new Node(4)
const five=new Node(5)

one.next=two
// two.next=three
// three.next=four
// four.next=five

console.log(removeNthFromEnd(one,1))