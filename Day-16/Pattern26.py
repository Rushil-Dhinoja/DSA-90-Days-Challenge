n = int(input())
def PatternTwentySix(n):
    i = 1
    printNum = 1
    while (i <=n):
        space = n - i
        while (space):
            print(' ', end='')
            space -= 1
        
        star = 1
        while(star <= i):
            print(printNum,end='')
            star +=1
            printNum +=1 
        
        i+=1
        print(end='\n')       
PatternTwentySix(n)