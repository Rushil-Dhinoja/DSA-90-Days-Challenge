import math
def reverse(x: int) -> int:
    ans:int = 0
    sign:bool = x < 0 and True or False
    x:int = abs(x)
    while(x!=0):
        digit:int = x % 10
        if (ans*10>2**31):
            return 0
        ans = ans * 10 + digit
        x:int = x//10
    return sign and -abs(ans) or ans
            
print(reverse(124))