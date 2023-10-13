/* 234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 
Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

*/

//SOLUTION

var isPalindrome = function(head) {
    let arr=[];
    
    while(head !== null){
        arr.push(head.val)
        head=head.next
    }
    
    let revArr=[...arr]
    revArr.reverse()

    for(let i=0;i<arr.length;i++){
        if(arr[i] !== revArr[i]){
            return false
        }
    }

    return true
};

//TEST
class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}


const head=new Node(1)
const num2=new Node(2)

head.next=num2


console.log(isPalindrome(head))