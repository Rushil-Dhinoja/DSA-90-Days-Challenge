
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        ans:int = 1
        i:int = 0
        while i <= 30:
            if ans == n:
                return True
            i += 1
            ans = ans * 2
            
        return False
            

n = int(input())

sol = Solution()

print(sol.isPowerOfTwo(n))