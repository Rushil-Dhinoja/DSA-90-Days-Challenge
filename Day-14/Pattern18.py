n = int(input())
def PatternEighteen(n):
    i = 1
    while (i <=n):
        j = 1
        while (j <= i ):
            print(chr(65 + n + j - i -1), end = '')
            j +=1
        i += 1
        print(end='\n')
    
PatternEighteen(n)

