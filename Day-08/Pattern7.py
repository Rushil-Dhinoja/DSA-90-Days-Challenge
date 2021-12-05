n = int(input())

def PatternSeven(n):
    i = 1
    while(i<=n):
        j = 1
        while(j <= i):
            print(i, end='')
            j = j + 1
        print(end='\n')
        i = i+1
    

PatternSeven(n)