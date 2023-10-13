/* 461. Hamming Distance
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1
 

Constraints:

0 <= x, y <= 231 - 1
*/

var hammingDistance = function(x, y) {
    //change them to binary
    let binX=x.toString(2)
    let binY=y.toString(2)

    //set the same length
    if(binX.length > binY.length){
        binY="0".repeat(binX.length-binY.length).concat(binY)
    }else if(binY.length > binX.length){
        binX="0".repeat(binY.length-binX.length).concat(binX)
    }

    //set counter
    let counter=0

    //compare each bit
    for(let i=0; i < binX.length;i++){
        if(binX[i] != binY[i]){
            counter++
        }
    }

    
    return counter

    
};

console.log(hammingDistance(3,1))