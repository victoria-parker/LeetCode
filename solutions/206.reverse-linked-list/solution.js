/* 206.Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000 
*/

//SOLUTION
function reverseLinkedList(head){
    
    let prev=null
    
    while(head !== null){

        let next=head.next;
        head.next=prev;
        prev=head;
        head=next;

    }

    return prev
}

//TEST
class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

const a= new Node('A')
const b= new Node('B')
const c= new Node('C')

a.next=b
b.next=c


console.log(reverseLinkedList(a))

