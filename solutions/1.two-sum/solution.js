function twoSum(nums, target ){
    
    let solution=[];
    let base=0;

    while(base < nums.length){

        for(let i=0; i < nums.length; i++){
                if(nums[base] + nums[i] == target && base != i){ 
                    
                    solution.push(base, i) 
                    return solution
                } 
        }
        base++;
    }
}

let solution=twoSum( [-1,-2,-3,-4,-5], -8)

console.log(solution)