n = int(input())

def PatternTwenty(n):
    i = 1
    while(i <=n):
        star = n-i+1
        while(star):
            print('*', end='')
            star -= 1
        i += 1
        print(end='\n')
    
PatternTwenty(n)