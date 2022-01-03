def findMid(start, end):
    return (start+end)//2

def findPivot(arr):
    start = 0
    end = len(arr)-1
    mid = findMid(start,end)

    while(start<end):
        if(arr[mid]>=arr[0]):
            start = mid +1
        else:
            end = mid
        
        mid = findMid(start, end)
    
    return start


def binarySearch(arr, s, e,k):
    start = s
    end = e
    mid = findMid(start, end)
    
    while(start <= end):
        if(arr[mid]==k):
            return mid
        elif(arr[mid]<=k):
            start = mid + 1
        else:
            end = mid -1
        
        mid = findMid(start, end)
    
    return -1


def SearchInSortedRotatedArray(arr, k):
    pivot = findPivot(arr)

    if(arr[pivot]<= k and k<= arr[len(arr)-1]):
        return binarySearch(arr, pivot, len(arr)-1, k)
    else:
        return binarySearch(arr, 0, pivot, k)
    

print(SearchInSortedRotatedArray([2, 4, 5, 6, 8, 9, 1], 5))