import math
n = int(input())

def BinToDec(n):
    answer = 0
    i = 0

    while(n != 0):
        digit = n % 10
        if(digit == 1):
            answer = answer + math.pow(2, i)
        n = math.floor(n/10)
        i += 1
        
    print(math.floor(answer))

BinToDec(n)