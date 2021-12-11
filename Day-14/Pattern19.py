n = int(input())
def PatternNineteen(n):
    i = 1
    while (i <=n):
        space = n - i
        while (space):
            print(' ', end='')
            space -= 1
        
        star = 1
        while(star <= i):
            print('*',end='')
            star +=1
        
        i+=1
        print(end='\n')       
PatternNineteen(n)