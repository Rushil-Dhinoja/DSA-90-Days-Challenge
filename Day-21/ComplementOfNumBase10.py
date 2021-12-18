def bitwiseComplement( n: int) -> int:
    m:int = n
    mask: int = 0
    # Edge Case
    if(n == 0):
        return 1
            
    while(m !=0):
        mask = (mask<<1)|1
        m = m>>1
        
    ans:int = (~n) & mask
    return ans
    
print(bitwiseComplement(5))