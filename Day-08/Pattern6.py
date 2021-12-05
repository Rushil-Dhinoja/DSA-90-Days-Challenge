n = int(input())

def PatternSix(n):
    i = 1;
    while(i <=n):
        j = 1
        while(j <= i):
            print('*', end='')
            j = j+1
        print(end='\n')
        i = i + 1 

PatternSix(n)
