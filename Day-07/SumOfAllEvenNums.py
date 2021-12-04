n = int(input())

def sumOfEvenNumber(n):
    sum = 0
    for i in range(0, n+1):
        if(i % 2 == 0):
            sum = sum +i
    print(sum)

    # While Approach
def sumOfEvenWhile(n):
    i = 1
    sum = 0
    while i <= n:
        if(i % 2 == 0):
            sum = sum + i
        i = i +1
    print(sum)



sumOfEvenNumber(n)
sumOfEvenWhile(n)