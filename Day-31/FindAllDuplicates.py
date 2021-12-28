def FindAllDuplicates(arr):
    map = {}
    returnArray = []

    for i in arr:
        if i in map:
            returnArray.append(i)
        else:
            map[i] = i
    
    return returnArray

print(FindAllDuplicates([4,3,2,7,8,2,3,1]))

def FindAllDuplicatesOneSpace(arr):
    output=[]
    for num in arr:
        if arr[abs(num) - 1] < 0:
            print('if')
            output.append(abs(num))
        else:
            print('else')
            arr[abs(num) - 1] *= -1
    return output

print(FindAllDuplicatesOneSpace([4,3,2,7,8,2,3,1]))