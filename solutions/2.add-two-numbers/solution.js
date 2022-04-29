/* 2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/

//SOLUTION
var addTwoNumbers = function(l1, l2) {
    let arr1=[]
    let arr2=[]

    let head1=l1
    let head2=l2

    let length1=0;
    let length2=0;

    while(l1 !== null){
        arr1.push(l1.val)
        l1=l1.next
        length1++
    }

    while(l2 !== null){
        arr2.push(l2.val)
        l2=l2.next
        length2++
    }

    arr1.reverse()
    arr2.reverse()

    let str1=arr1.join('')
    let str2=arr2.join('')

    
    let sum=BigInt(str1)+ BigInt(str2)
    let sumstr=sum.toString()
    
    let rsum=sumstr.split('').reverse()


    let head=new Node(parseInt(rsum[0])) //ListNode in LeetCode
    let current=head
    for(let i=1;i < rsum.length; i++){
        current.next=new Node(parseInt(rsum[i]))
        current=current.next
    }

    return head

};



//TEST

class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

const n1=new Node(1)
const n2=new Node(0)
const n3=new Node(0)
const n4=new Node(0)
const n5=new Node(0)
const n6=new Node(0)
const n7=new Node(0)
const n8=new Node(0)
const n9=new Node(0)
const n10=new Node(0)
const n11=new Node(0)
const n12=new Node(0)
const n13=new Node(0)
const n14=new Node(0)
const n15=new Node(0)
const n16=new Node(0)
const n17=new Node(0)
const n18=new Node(0)
const n19=new Node(0)
const n20=new Node(0)
const n21=new Node(0)
const n22=new Node(0)
const n23=new Node(0)
const n24=new Node(0)
const n25=new Node(0)
const n26=new Node(0)
const n27=new Node(0)
const n28=new Node(0)
const n29=new Node(0)
const n30=new Node(1)

n1.next=n2
n2.next=n3
n3.next=n4
n4.next=n5
n5.next=n6
n6.next=n7
n7.next=n8
n8.next=n9
n9.next=n10
n10.next=n11
n11.next=n12
n12.next=n13
n13.next=n14
n14.next=n15
n15.next=n16
n16.next=n17
n17.next=n18
n18.next=n19
n19.next=n20
n20.next=n21
n21.next=n22
n22.next=n23
n23.next=n24
n24.next=n25
n25.next=n26
n26.next=n27
n27.next=n28
n28.next=n29
n29.next=n30


const n31=new Node(5)
const n32=new Node(6)
const n33=new Node(4)

n31.next=n32
n32.next=n33


console.log(addTwoNumbers(n1,n31))