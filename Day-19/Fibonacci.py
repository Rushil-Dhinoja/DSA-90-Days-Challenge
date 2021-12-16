n = int(input())

a = 0
b = 1
i = 2
print(a)
print(b)

while(i<=n):
    sum = a+b
    a = b
    b = sum
    print(sum)
    i += 1 

