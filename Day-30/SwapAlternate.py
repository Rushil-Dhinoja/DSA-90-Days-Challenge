def SwapAlternate(arr):
    for i in range(0, len(arr)):
        if(i % 2 ==0):
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        
    print(arr)
    

SwapAlternate([1,2,3,4,5,6])