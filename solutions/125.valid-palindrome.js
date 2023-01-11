/* 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

var isPalindrome = function(s) {

    let chars=s.toLowerCase().match(/[a-z\d]/g)

    if(!chars) return true

    for(let i=0;i < chars.length/2; i++){
        if(chars[i] !== chars[chars.length -1 -i]){
         return false
        }
    }

    return true
}

// var isPalindrome = function(s) {

//   let chars=s.toLowerCase().match(/[a-z\d]/g)

//  return chars ? chars.every((char,index)=>char===chars[chars.length-1-index]) : true

// };