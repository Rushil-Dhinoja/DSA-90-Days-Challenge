a = int(input())
b = int(input())

def SetBits(a, b):
    setBitsCount = 0
    while(a!=0):
        if(a&1):
            setBitsCount += 1
        a = a >> 1

    while(b!=0):
        if(b&1):
            setBitsCount += 1
        b= b >> 1
    print(setBitsCount)

SetBits(a, b)