n = int(input())

def PatternEight(n):
    i = 1
    count = 1
    while(i <=n):
        j = 1
        while(j <= i):
            print(count ,end='')
            j = j +1
            count = count +1
        print(end='\n')
        i = i + 1
    
PatternEight(n)