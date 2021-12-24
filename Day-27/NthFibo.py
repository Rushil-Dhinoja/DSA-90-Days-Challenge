n = int(input())

def NthFibo(n):
    a = 0
    b = 1
    i = 2
    while(i<n):
        temp = a + b
        a = b
        b = temp
        i+= 1
    
    return b

print(NthFibo(n))