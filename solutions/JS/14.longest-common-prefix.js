/* 14.Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function(strs) {
    
    arr=[]
    for(let i=0;i < strs[0].length; i++){
        let check=strs.every(value=> value[i] == strs[0][i])
        if(check){
            arr.push(strs[0][i])
        }else if(!check){
            break
        }
    }

    return arr.length == 0 ? "" : arr.join('')
};


console.log(longestCommonPrefix(["cir","car"]))

