import math
n = int(input())
def subtractProductAndSum(n):
    num= n
    product = 1
    sum = 0
    while(num):
        product *= num % 10
        sum += num % 10
        num = math.floor(num / 10)
            
    return product - sum
        
print(subtractProductAndSum(n))