def MergeTwoSortedArray(arr1, arr2):
    arr3 = []
    i = 0
    j = 0
    lenA = len(arr1)
    lenB = len(arr2)
    print(lenA)
    print(lenB)
    while(i < lenA and j <lenB):
        if(arr1[i]< arr2[j]):
            arr3.append(arr1[i])
            i += 1
        elif(arr2[j] < arr1[i]):
            arr3.append(arr2[j])
            j +=1
        else:
            arr3.append(arr1[i])
            i += 1
    
    while(i< lenA):
        arr3.append(arr1[i])
        i+= 1
    while(j<lenB):
        arr3.append(arr2[j])
        j+=1

    print(arr3)

MergeTwoSortedArray([1, 3, 5, 7, 9], [ 2, 4, 6]);
