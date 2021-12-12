n = int(input())

def PatternTwentyTwo(n):
    i = 1
    while(i <=n):
        space = i -1
        while(space):
            print(' ', end='')
            space -=1
        
        num = n-i +1
        while(num):
            print(i, end='')
            num-=1

        i+=1
        print(end='\n')
    
PatternTwentyTwo(n)
