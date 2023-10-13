/* 557. Reverse Words in a String III
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

var reverseWords = function(s) {
    let words=s.split(' ')

    //helper
    function reverse(w){
        return [...w].reverse().join('')
    }

    return words.map(word=>reverse(word)).join(' ')
}

// var reverseWords = function(s) {
    
//     let words=s.split(' ')

//     //helper
//     function reverse(w){
//       let result=''
      
//       for(let i=w.length-1; i >= 0;i--){
//           result=result+w[i]
//       }
//       return result
//     }

//     //with map it transforms each word using the helper
//     return words.map(word=>reverse(word)).join(' ')
// };

