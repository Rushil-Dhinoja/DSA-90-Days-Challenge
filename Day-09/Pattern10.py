n = int(input())

def PatternTen(n):
    i = 1
    while(i <=n):
        count = i
        j = 1
        while(j <=i):
            print(count, end='')
            j = j+1
            count = count -1
        print(end='\n')
        i = i+ 1
    

PatternTen(n)


def PatternTenNoCount(n):
    i = 1
    while(i <=n):
        j = 1
        while(j <=i):
            print(i-j+1, end='')
            j = j+1
        print(end='\n')
        i = i+ 1

PatternTenNoCount(n)