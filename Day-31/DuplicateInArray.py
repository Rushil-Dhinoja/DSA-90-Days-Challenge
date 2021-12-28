def DuplicateUsingHashTable(arr):
    map = {}
    for i in arr:
        if i in map:
            return i
        map[i] = True

def DuplicateUsingXOR(arr):
    ans=0
    for i in arr:
        ans ^= i
    
    for i in range(0, len(arr)):
        ans ^= i
    
    return ans

print(DuplicateUsingHashTable([4, 2, 1, 3, 1]))
print(DuplicateUsingXOR([4, 2, 1, 3, 1]))
