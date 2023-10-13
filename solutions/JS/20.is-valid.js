/* 20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

var isValid = function(s) {
    //setups
    let arr=[...s]
    let openers=['(','{','[']
    let closers=[')','}',']']
    let couples={
            '(': ')',
            '{': '}',
            '[' : ']'
    }
    let expected=[]


    //check false by default
    if(arr.length % 2 != 0){
        return false
    }
  
    if(closers.includes(arr[0])){
        return false
    }
  
    for(let key in couples){
        let amountKeys=arr.filter(e=> e == key).length
        let amountVals=arr.filter(e=> e == couples[key]).length
        if(amountKeys != amountVals){
            return false
        }
    }

    if(openers.includes(arr[arr.length-1])){
        return false
    }


    //Loop through arr checking validity     
    for(let i=0; i < arr.length; i++){

        if(openers.includes(arr[i])){

            expected.unshift(couples[arr[i]])

        }else if(closers.includes(arr[i])){
         
         if(arr[i]==expected[0]){
                    expected.shift()
                }else{
                  return false
                }   
        }
    }

    return true
  
};