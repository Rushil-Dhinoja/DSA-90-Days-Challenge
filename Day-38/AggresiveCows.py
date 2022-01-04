def isPossible(arr, k, mid):
    cowCount= 1
    lastPosition = arr[0]
    for i in range(0, len(arr)):
        if(arr[i]-lastPosition >=mid):
            cowCount+=1
            if(cowCount == k):
                return True
            lastPosition=arr[i]

        # if(arr[i]-lastPosition >= mid):
        # cowCount += 1

        # cowCount+=1
        # if(cowCount === k):
        #     return True
        # lastPosition = arr[i]

    return False
        
            
def aggressiveCows(stalls, k):
    # Write your code here.
    stalls.sort()
    start= 0
    maxi = -1
    for i in stalls:
        maxi = max(maxi, i)
    end = maxi 
    mid = (start+end)//2
    ans = -1
    
    while(start <=end):
        if(isPossible(stalls, k, mid)):
            ans = mid
            start = mid + 1
        else:
            end = mid -1
        mid = (start+end)//2
    return ans
            

print(aggressiveCows([4, 2, 1 ,3 ,6], 2))