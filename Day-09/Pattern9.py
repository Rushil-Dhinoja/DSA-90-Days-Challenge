n = int(input())

def PatternNine(n):
    i = 1
    while(i <=n):
        count = i
        j = 1
        while(j<=i):
            print(count, end='')
            count = count +1
            j = j + 1
        i = i+ 1
        print(end='\n')

PatternNine(n)


def PatternNineNoCount(n):
    i = 1
    while(i <=n):
        j = 0
        while(j<i):
            print(i+j,  end='')
            j = j + 1
        i = i+ 1
        print(end='\n')

PatternNineNoCount(n)