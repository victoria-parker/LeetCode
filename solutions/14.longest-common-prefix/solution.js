/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl" */

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



    // let firstWord=strs[0].split('')
   

    // console.log(arr)
    // // for(let i=1;i<strs.length;i++){
    // //     for(j=0;j<strs[i].length;j++){
    // //         if(strs[i][j] == firstWord[j]){
    // //             console.log(firstWord[j])
    // //         }
    // //     }
    // // }