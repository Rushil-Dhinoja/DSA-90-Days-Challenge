def PivotInArray(arr):
    start = 0
    end = len(arr)-1
    mid = (start+end)//2

    while(start<end):
        if(arr[mid]>=arr[0]):
            start = mid+1
        elif(arr[mid]<=arr[len(arr)-1]):
            end = mid
        
        mid = (start+end)//2

    return start

print(PivotInArray([10, 17, 1, 3, 8]));
