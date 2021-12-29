def findTriplets(arr, n, k):
    
    # Write your code here.
    returnArray = []
    for i in range(0, n):
        for j in range (i+1, n):
            for l in range(j+1, n):
                sum = arr[i]+arr[j]+arr[l]
                if(sum==k):
                    sumArray = [arr[i], arr[j], arr[l]]
                    returnArray.append(sumArray)
                    if(len(returnArray)!=0):
                        return returnArray
                    else:
                        return -1
    return returnArray

print(findTriplets([1, 2, 3 ,1 ,2 ,3], 6, 6))
