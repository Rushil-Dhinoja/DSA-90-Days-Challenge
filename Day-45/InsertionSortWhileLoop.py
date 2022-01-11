def InsertionSort(arr):
    i = 1
    while(i < len(arr)):
        temp = arr[i]
        j = i-1
        while(j >= 0):
            if(arr[j] > temp):
                arr[j+1] = arr[j]
            else:
                break
                
            j -= 1
        
        arr[j+1] = temp
        i += 1
    print(arr)

InsertionSort([10,1,7,6,14,9])