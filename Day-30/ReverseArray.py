def ReverseArray(arr):
    for i in range(0, int(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-1-i]
        arr[len(arr)-1-i] = temp
    
    print(arr)

ReverseArray([1,2,3,4,5])