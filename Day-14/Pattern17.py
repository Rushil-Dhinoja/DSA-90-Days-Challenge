n = int(input())
def PatternSeventeen(n):
    i = 1
    while(i <=n):
        j = 0
        while ( j <i):
            print(chr(65 + j + i -1), end='')
            j += 1
        i += 1
        print(end='\n')
    
PatternSeventeen(n)