n = int(input())
def PatternTwentyThree(n):
    i = 1
    while(i<=n):
        space = n-i
        while(space):
            print(' ', end='')
            space -= 1
        
        nums = i
        while(nums):
            print(i, end='')
            nums -= 1
        
        i+=1
        print(end='\n')

PatternTwentyThree(n)