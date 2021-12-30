def BinarySearch(arr, key ):
    start = 0
    end = len(arr)-1
    mid = (start+end)//2

    while(start<=end):
        if(arr[mid]==key):
            return mid
        elif(arr[mid]<key):
            start = mid + 1
        else:
            end = mid-1

        mid = (start+end)//2
    
    return -1


print(BinarySearch([3, 6, 8, 9, 10, 28], 10))