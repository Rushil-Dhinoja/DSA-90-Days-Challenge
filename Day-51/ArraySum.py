def ArraySum(arrOne, arrTwo):
    i = len(arrOne)-1
    j = len(arrTwo)-1
    
    carry = 0
    returnArray = []
    while(i>=0 and j>=0):
        sum = arrOne[i] + arrTwo[j] + carry
        carry = sum//10
        sum = sum % 10
        i -= 1
        j -= 1
        returnArray.append(int(sum))
    
    while(i>=0):
        sum = arrOne[i] + carry
        carry = sum//10
        sum = sum % 10
        i-=1
        returnArray.append(int(sum))
    
    while(j>=0):
        sum = arrTwo[j] + carry
        carry = sum//10
        sum = sum % 10
        i-=1
        returnArray.append(int(sum))
    
    if(carry>0):
        returnArray.append(carry)
    returnArray.reverse()
    return returnArray


print(ArraySum([4, 5, 1], [7, 4, 5]))

