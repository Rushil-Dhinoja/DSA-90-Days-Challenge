n = int(input())

def PatternEleven(n):
    i = 1
    ch = 65
    while(i <= n):
        j =1
        while(j <=n):
            print(chr(ch), end='')
            j+= 1
        i +=1
        ch += 1
        print(end='\n')
    
PatternEleven(n)

