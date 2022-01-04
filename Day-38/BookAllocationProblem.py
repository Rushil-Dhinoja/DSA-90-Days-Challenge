def isPossible(arr, students, mid):
    studentCount = 1
    pageSum = 0
    for i in range(0, len(arr)):
        if(pageSum + arr[i] <= mid):
            pageSum += arr[i]
        else:
            studentCount += 1
            if(studentCount > students or arr[i]>mid):
                return False
            else:
                pageSum = arr[i]
    return True


def BookAllocationProblem(arr, students):
    sum =0
    for i in range(1, len(arr)):
        sum += arr[i]
    start = arr[0]
    end = sum
    mid = (start+end)//2
    ans = -1
    while(start<end):
        if(isPossible(arr, students, mid)):
            ans = mid
            end = mid -1
        else:
            start = mid +1

        mid = (start+end )//2

    return ans
    



print(BookAllocationProblem([10,20,30,40], 2))