def LinearSearch(arr, key):
    for i in arr:
        if(i == key):
            return key
    
    return "Key not found"


print(LinearSearch([1,3,33,44,55], 53))