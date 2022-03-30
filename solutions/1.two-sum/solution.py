def two_sum(nums, target):
 
    base=0
    while base < len(nums):
        for index in range(len(nums)):
            if nums[base] + nums[index] == target and base != index:
                solution=[base,index]
                return solution
        base +=1


solution=two_sum([-1,-2,-3,-4,-5], -8)

print(solution)