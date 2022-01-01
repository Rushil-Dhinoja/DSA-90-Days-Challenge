class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        allSum = 0
        leftSum =0
        for i in nums:
            allSum += i
        
        for i in range(0, len(nums)):
            rightSum = allSum - leftSum - nums[i]
            if(leftSum == rightSum):
                return i
            
            leftSum += nums[i]
        
        return -1