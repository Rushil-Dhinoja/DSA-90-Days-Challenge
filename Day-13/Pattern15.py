n = int(input())
def PatternFifteen(n):
    i = 1
    while (i <= n):
        j = 1
        while(j <= i):
            print(chr(64 + i), end='')
            j += 1
        i += 1
        print(end='\n')


PatternFifteen(n)