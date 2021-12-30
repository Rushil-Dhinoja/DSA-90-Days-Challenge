def BinarySearch(arr, key):
    mid = len(arr)//2
    if(arr[mid]==key):
        return arr[mid]
    if(arr[mid]<key):
        return BinarySearch(arr[mid+1::], key)
    if(arr[mid]>key):
        return BinarySearch(arr[:mid], key)
    

print(BinarySearch([3,6,8,9,10,28], 3))