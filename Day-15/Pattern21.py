n = int(input())

def PatternTwentyone(n):
    i = 1
    while(i<=n):
        space = i - 1

        while(space):
            print(' ', end='')
            space-=1

        star = n-i+1
        
        while(star):
            print('*', end='')
            star -= 1
        
        print(end='\n')
        i+=1    
    

PatternTwentyone(n)