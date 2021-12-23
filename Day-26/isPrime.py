n = int(input())

def isPrime(n)->bool:
    i = 2
    flag = True
    while(i< n):
        if(n%i == 0):
            flag = False
            break;
        i += 1
    if(flag):
        return True
    else:
        return False

print(isPrime(n))
