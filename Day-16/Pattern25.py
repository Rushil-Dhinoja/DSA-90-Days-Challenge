n = int(input())

def PatternTwentyFive(n):
    i = 1
    printNum = 1

    while(i <=n):
        space = i -1
        while(space):
            print(' ', end='')
            space -=1
        
        num = n-i +1
        while(num):
            print(printNum, end='')
            num-=1
            printNum += 1

        i+=1
        print(end='\n')
    
PatternTwentyFive(n)
