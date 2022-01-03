def squareRoot(num):
    start = 0
    end = num
    mid = (start+end)//2
    ans = -1

    while(start<=end):
        square = mid * mid
        if(square == num):
            return mid
        elif(square>num):
            end = mid -1
        else:
            ans = mid
            start = mid +1
        mid = (start+end)//2
    
    return ans