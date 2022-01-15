def Rotate(nums, k):
    arr = []
    for i in range(0, len(nums)):
        arr.insert((i+k)%(len(nums)), nums[i]) 
        
        
    for i in range(0, len(arr)):
        nums[i] = arr[i]


Rotate([1, 7, 9, 11, 12], 2)