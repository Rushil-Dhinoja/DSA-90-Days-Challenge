def ZeroAnsOnes(arr):
    i = 0
    j = len(arr)-1
    while (i<j):
        if(arr[i]== 0):
            i+= 1
        elif(arr[j]==1):
            j-=1
        elif(arr[i]==1):
            temp = arr[i]
            arr[i]=arr[j]
            arr[j]= temp
    return arr

print(ZeroAnsOnes([0, 1, 0, 1, 1, 0, 1, 1, 0, 0]))