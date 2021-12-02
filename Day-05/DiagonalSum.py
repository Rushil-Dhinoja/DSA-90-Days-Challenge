inputData = [[1, 2, 3],[4, 5, 6],[9, 8, 9]];

def diagonalSum(array):
    firstDiagonalSum = 0
    secondDiagonalSum = 0
    i = 0
    j = len(array) -1

    for index in array:
        firstDiagonalSum = firstDiagonalSum + index[i]
        secondDiagonalSum = secondDiagonalSum + index[j]
        i = i + 1
        j = j -1

    return abs(firstDiagonalSum-secondDiagonalSum)

print(diagonalSum(inputData))