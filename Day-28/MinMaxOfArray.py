def MinMaxOfArray(arr):
    min = arr[0]
    max = arr[0]

    for i in arr:
        if(min > i):
            min = i
        
        if(max < i):
            max = i
    print(min,max)


MinMaxOfArray([1,2,4,0,3])