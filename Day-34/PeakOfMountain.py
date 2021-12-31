def peakIndexInMountainArray(arr) -> int:
    start = 0
    end = len(arr)
    mid = (start+end)//2
    while(start<= end):
        if(arr[mid -1]<arr[mid] and arr[mid+1]<arr[mid]):
            return mid
        elif(arr[mid+1]>arr[mid]):
            start = mid +1
        else:
            end = mid -1
            
        mid = (start+end)//2


print(peakIndexInMountainArray([0, 10, 5, 2]))