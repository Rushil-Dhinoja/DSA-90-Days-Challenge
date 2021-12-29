def ArrayIntersection(arr1, arr2):
    i = 0
    j = 0
    returnArray =[]
    while(i<len(arr1) and j < len(arr2)):
        if(arr1[i]==arr2[j]):
            returnArray.append(arr2[j])
            i += 1
            j += 1
        elif(arr1[i] < arr2[j]):
            i += 1
        else:
            j += 1

    return returnArray

print(ArrayIntersection([1,4,5], [3,4,5]))