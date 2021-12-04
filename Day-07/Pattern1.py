n = int(input())

def createPattern(n):
    i =1
    while(i <= n):
        j = 1
        while( j<=n):
            print('*', end='')
            j = j +1
        print(end='\n')
        i = i +1

createPattern(n)