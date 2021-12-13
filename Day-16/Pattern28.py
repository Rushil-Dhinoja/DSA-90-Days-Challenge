n = int(input())

def PatternTwentyEight(n):
    i = 1
    while(i<=n):
        start = n-i+1
        num = i
        while(start):
            print(num, end='')
            start -=1
            num += 1
        
        star = (i -1)*2
        while(star):
            print('*', end='')
            star-=1
        
        revStart = n-i+1
        revNum=n
        while(revStart):
            print(revNum, end='')
            revNum-=1
            revStart-=1
        
        print(end='\n')
        i+=1
        

    
PatternTwentyEight(n)