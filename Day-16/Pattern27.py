n = int(input())

def PatternTwentySeven(n):
    i = 1
    while(i <=n):
        space = n-i
        while(space):
            print(' ', end='')
            space-=1
        
        num = i
        printNum = 1
        while(num):
            print(printNum, end='')
            printNum += 1
            num-=1
        
        num2 = i-1
        while(num2):
            print(num2,end='')
            num2-=1
        print(end='\n')
        i +=1

        

        
PatternTwentySeven(n)

