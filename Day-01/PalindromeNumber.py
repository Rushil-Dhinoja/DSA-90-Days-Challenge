def reverseInteger(number):
    rev = 0
    while(number > 0):
        rev = rev * 10 + number % 10
        number =int(number / 10)
    return rev

def isNumberPalindrome(number):
    reverseNumber = reverseInteger(number)
    if (reverseNumber == number):
        print("number is palindrome")
    else:
        print('Number is not palindrome')


isNumberPalindrome(1211)