/* 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
                 0 1 2 3 4 5 6 7 8   length=9
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

var maxArea = function(height) {

    /* I set up the variables I need: a variable to store the maximum area calculated, and two pointers to go through the array one from start and one from the end. */

    let maxAreaCalculated=0
    let i=0;
    let j=height.length;


    /* It iterates through the array and calculates the area for the values in that iteration. It starts calculating the area from the two extremes of the array and in each iteration one of the pointers gets closer to the other.
    
    In each iteration it calculates the area and it compares the value of each index, then, it chooses to keep the highest value of those index and moves the pointer of the lowest value closer to the other to try what is the area with the next index value. 
    
    When the values of j and i are the same, it means that the pointers have been through the entire array, each from one side of it, and tested all the possible max areas. */
    while(j != i){

        let area= (j-i) * Math.min(height[i],height[j])
        
        /* If the new area calculated is bigger than the stored one, I replace the stored one for the new one. */
        if(area > maxAreaCalculated){
            maxAreaCalculated = area
        }

        if(height[i] < height[j]){
            i++
        }else{
            j--
        }
    }

    /* When the iterations are over, the function returns the max area calculated */
    return maxAreaCalculated

};



//TEST
console.log(maxArea([1,8,6,2,5,4,8,3,7]))