def FirstAndLast(arr, key):
    start = 0
    end = len(arr) -1 
    mid = (start+end)//2
    first = -1
    last = -1
    while(start <= end):
        if(arr[mid]==key):
            first = mid
            end = mid - 1
        elif(arr[mid]<key):
            start = mid + 1
        elif(arr[mid]>key):
            end = mid - 1
        mid = (start+end)//2

    start = 0
    end = len(arr)-1
    mid = (start+end)//2
    
    while(start <=end):
        if(arr[mid]==key):
            last = mid
            start = mid + 1
        elif(arr[mid]<key):
            start = mid + 1
        elif(arr[mid]>key):
            end = mid - 1
        mid = (start+end)//2

    print(first)
    print(last)


FirstAndLast([0, 0, 1, 1, 2, 2, 2, 2], 2)
        