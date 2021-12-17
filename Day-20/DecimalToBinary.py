import math
n = int(input())
def DecToBin(n):
    answer = 0
    i = 0
    while(n!=0):
        digit = n & 1
        answer = (digit *math.pow(10, i)) + answer
        n = n >>1
        i += 1
    
    print(math.floor(answer))


DecToBin(n)
