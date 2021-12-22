def Factorial(n):
    fact = 1
    for i in range(1, n+1):
        fact *= i
    return fact

def NCR(n, r):
    Numerator = Factorial(n)
    Denomiantor = Factorial(r) * Factorial(n -r)

    return Numerator//Denomiantor

n = int(input())
r = int(input())

print(NCR(n, r))