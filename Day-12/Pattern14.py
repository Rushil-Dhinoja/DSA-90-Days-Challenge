n = int(input())
def PatternFourteen(n):
    i = 1
    while(i <= n):
        j = 0
        ch = 65 + i
        while ( j <n):
            print(chr(ch),end='')
            ch += 1
            j += 1
        i += 1
        print(end='\n')
    
PatternFourteen(n)
        
    
