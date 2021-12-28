def UniqueOccurrences(arr):
    occurrences={}
    for i in range(0, len(arr)):
        if arr[i] in occurrences:
            occurrences[arr[i]] += 1
        else:
            occurrences[arr[i]] = 1
        
    if(len(set(occurrences.values()))== len(occurrences)):
        return True
    else:
        return False

print(UniqueOccurrences([1, 2,]))