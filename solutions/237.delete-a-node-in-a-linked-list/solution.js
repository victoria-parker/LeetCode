/* 237. Delete Node in a Linked List
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.


Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

Constraints:
The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000
The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node

*/

//SOLUTION

var deleteNode = function(node) {

    let next=node.next.next
    node.val=node.next.val
    node.next=next

}


//TEST

class Node{
    constructor(data){
        this.val=data;
        this.next=null
    }
}

const a=new Node('A')
const b=new Node('B')
const c=new Node('C')
const d=new Node('D')

a.next=b
b.next=c
c.next=d

deleteNode(b)

console.log(a)
