def MoveZeros(arr):
    point = 0
    for i in range(0, len(arr)):
        if(arr[i]!=0):
            temp = arr[i]
            arr[i] = arr[point]
            arr[point] = temp
            point += 1
    print(arr)        

MoveZeros([0, 1, 0, 3, 12])