def isValid(string):
    stack = []
    for i in string:
        if(i == '('or i=='['or i== '{'):
            stack.append(i)
        else:
            if(len(stack) == 0):
                return False
            if(i == ')'):
                if(stack[len(stack) - 1 ]!= '('):
                    return False
                stack.pop()
            if(i == ']'):
                if(stack[len(stack) - 1] != '['):
                    return False
                stack.pop()
            if(i == '}'):
                if(stack[len(stack) - 1] != '{'):
                    return False
                stack.pop()
    return len(stack) == 0


print(isValid('{[]}'))