/* 21. Merge Two Sorted Lists

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


//SOLUTION

var mergeTwoLists = function(list1, list2) {
  
  if(!list1 && !list2) return null;
  if(!list1 && list2) return list2;
  if(list1 && !list2) return list1;

  let current1=list1 
  let current2=list2
  let tail;
  
  if(current1.val < current2.val){
    tail=current1
    current1=current1.next
  }else{
      tail=current2
      current2=current2.next
  }
  
  let head=tail

  while(tail !==null){

    if(current1 == null || current2 == null) break;

    if(current1.val < current2.val){
        tail.next=current1
        current1=current1.next
    }else{
        tail.next=current2
        current2=current2.next
    }

    tail=tail.next
  }

  if(current2 == null && current1) tail.next=current1;
  if(current1 == null && current2) tail.next=current2;

  return head;
  
};




//TEST

class Node{
    constructor(data){
        this.val=data;
        this.next=null
    }
}


const list1=new Node(0)
const list1num2=new Node(2)
const list1num3=new Node(6)

list1.next=list1num2
list1num2.next=list1num3

const list2=new Node(1)
const list2num2=new Node(2)


list2.next=list2num2



function print(list){
    let output='<HEAD> '
    
    while(list !== null){
        output+=list.val+' '
        list=list.next
    }
    output+='<TAIL>'
    console.log(output)
}

print(mergeTwoLists(list1,list2)) // 1 1 2 2 2 3
