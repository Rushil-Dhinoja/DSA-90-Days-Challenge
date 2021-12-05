n = int(input())

def PatternFour(n):
    i = 1
    while(i <= n):
        j = 1
        while (j <=n):
            print(n-j+1, end='')
            j = j+1
        i= i+1
        print(end='\n')
    
PatternFour(n)