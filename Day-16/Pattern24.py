n = int(input())

def PatternTwentyFour(n):
    i = 1
    while(i <=n):
        space = i -1
        while(space):
            print(' ', end='')
            space -=1
        
        num = n-i +1
        printNum = i
        while(num):
            print(printNum, end='')
            num-=1
            printNum+= 1

        i+=1
        print(end='\n')
    
PatternTwentyFour(n)
