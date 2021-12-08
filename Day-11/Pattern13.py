n = int(input())

def PatternThirteen(n):
    i = 1
    ch = 65
    while(i <= n):
        j = 1
        while(j <= n):
            print(chr(ch), end='')
            ch += 1
            j += 1
        print(end='\n')
        i += 1

PatternThirteen(n)