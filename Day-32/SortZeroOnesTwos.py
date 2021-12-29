def SortZeroOneTwos(arr):
    start = 0
    mid = 0
    end = len(arr)-1

    while(mid<= end):
        if(arr[mid] == 0):
            temp = arr[mid]
            arr[mid] = arr[start]
            arr[start] = temp
            mid += 1
            start += 1
        elif(arr[mid] == 1):
            mid += 1
        else:
            temp = arr[end]
            arr[end] = arr[mid]
            arr[mid] = temp
            end -= 1
        
    return arr


print(SortZeroOneTwos([1, 0, 0, 1, 0, 2, 2, 2, 1, 0, 0]))