def findUniqueElements(arr):
    ans = 0
    for i in arr:
        ans = ans ^ i
    
    return ans

print(findUniqueElements([5, 3, 1, 5, 1, 3, 4, 7, 4, 8, 8]))