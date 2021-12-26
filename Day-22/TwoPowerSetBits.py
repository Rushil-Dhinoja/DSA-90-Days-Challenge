def TwoPowerSetBits(n):
    setBits = 0
    if(n < 0):
        setBits += 1
    n = abs(n)
    while(n!=0):
        if(n&1):
            setBits += 1
        n = n >>1
    
    if(setBits == 1):
        return True
    else:
        return False

print(TwoPowerSetBits(15))