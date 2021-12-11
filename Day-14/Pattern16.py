n = int(input())
def PatternSixteen(n):
    i = 1
    ch = 65
    while(i <= n):
        j = 1
        while(j <= i):
            print(chr(ch), end='')
            ch += 1
            j += 1
        i += 1
        print(end='\n')

PatternSixteen(n)