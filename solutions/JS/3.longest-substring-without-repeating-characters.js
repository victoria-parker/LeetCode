/* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/


//SOLUTION

var lengthOfLongestSubstring = function(s) {

    if(s === '') return 0;

    //I turn the string into an array
    let arr=s.split('')

    //I create two array to push in them the possible solutions 
    
    let option1=[]

    let option2=[arr[0]]



    //I loop over every character to analise.
    //The idea is to push the posible solutions in the arrays,  compare them, and keep the longest one.

    for(let i=1; i < arr.length;i++){
        
        //if the prev element is equal to the one we are on like [b,b]
        if(arr[i-1]=== arr[i]){

            //if option2 is empty
            if(option2.length === 0){
            
                option2.push(arr[i])
              
            
            //if option2 is not empty
            }else if(option2.length !== 0){
                

                if(option2.length <= option1.length){
                
                    option2=[]
                    index2=-1
                    option2.push(arr[i])
              
                
                }else{
                    
                    option1=[]
                    option1=[...option2]


                    option2=[arr[i]]

                }
            }
        //if the element is not equal to the prev one
        }else if(arr[i-1] !== arr[i]){
            
            if(option2.length !== 0 && !option2.includes(arr[i])){
            
                option2.push(arr[i])
            
            }else if(option2.includes(arr[i])){

                if(option2.length > option1.length){
                    option1=[]
                    option1=[...option2]


                    let toAddB=option1.slice(option1.lastIndexOf(arr[i])+1)
                    option2=[...toAddB]
                    option2.push(arr[i])

                }else if(option2.length <= option1.length){
                    let toAddB=option2.slice(option2.lastIndexOf(arr[i])+1)
                    option2=[...toAddB]
                    option2.push(arr[i])
                }
            }


        }
    }

    if(option1.length >= option2.length){
        return option1.length
    }else{
        return option2.length
    }


};

console.log(lengthOfLongestSubstring("tvqnkvovks"));

/* TEST:
"bbtablud"---> 6
"abcabcbb"--->3
"bbbbb"--->1
"pwwkew"--->3
"dvdf"--->3
"tvqnkvovks"---> tiene que dar 5

*/
