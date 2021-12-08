n = int(input())

def PatternTwelve(n):
    i = 1
    while(i <= n):
        ch = 65
        j = 1
        while(j <= n):
            print(chr(ch), end='')
            ch += 1
            j += 1
        print(end='\n')
        i += 1

PatternTwelve(n)