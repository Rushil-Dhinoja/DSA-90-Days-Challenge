testCaseArray = [2, 11, 4, 7];
target = 9;

def TwoSum(data, target):
    lookup={}
    for i in range(0, len(data)):
        if(data[i] in lookup):
            return [lookup[data[i]], i]
        lookup[target- data[i]] = i
        
print(TwoSum(testCaseArray, target))