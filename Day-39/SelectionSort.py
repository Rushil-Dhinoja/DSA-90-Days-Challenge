def SelectionSort(arr):
    for i in range(0, len(arr)):
        minPass = i
        for j in range(i+1, len(arr)):
            if(arr[j]< arr[minPass]):
                minPass=j
        
        temp = arr[i]
        arr[i] = arr[minPass]
        arr[minPass] = temp

    print(arr)
    

SelectionSort([29, 78, 98, 13, 87, 66, 52, 51, 36])