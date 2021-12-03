nums = [3, 1, 2, 10, 1];


def runningSum(nums):
    length = len(nums)
    newArray = [0]* length
    newArray[0] = nums[0]
    for i in range(1, length):
        newArray[i] = newArray[i-1] + nums[i]
        print(i)
    
    print(newArray)


runningSum(nums)