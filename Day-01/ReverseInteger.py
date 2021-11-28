def reverseInteger(number):
    rev = 0
    while(number > 0):
        rev = rev * 10 + number % 10
        number =int(number / 10)
    print(rev)

reverseInteger(123)