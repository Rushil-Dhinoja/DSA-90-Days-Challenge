def BubbleSort(arr):
    for i in range(0, len(arr)):
        swapped = False
        for j in range(0, len(arr)-i-1):
            if(arr[j]>arr[j+1]):
                temp= arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped =True
                
        if (swapped == False):
            break
    print(arr)

BubbleSort([10, 1, 7, 6, 14, 9]);

