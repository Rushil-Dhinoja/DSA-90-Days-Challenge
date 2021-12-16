n = int(input())

i = 2
isPrime = True
while (i<n):
    if(n%i == 0):
        isPrime = False
        break;
    
    i += 1

if(isPrime):
    print('It is a prime number')
else:
    print('It is not a prime number')