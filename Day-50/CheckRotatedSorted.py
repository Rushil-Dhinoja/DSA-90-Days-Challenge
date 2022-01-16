def Check(arr):
    count = 0 
    for i in range(1, len(arr)):
        if(arr[i-1]>arr[i]):
            count += 1
    
    if(arr[len(arr)-1]>arr[0]):
        count += 1
    
    if(count <= 1):
        return True
    return False

Check([1,1,1])