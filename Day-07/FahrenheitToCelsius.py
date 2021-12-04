def FahrenheitToCelsius(n):
    i = 0;
    while(i <= n):
        celsius = ((i - 32)*5)/9
        print('{} Fahrenheit = {} Celsius'.format(i, celsius) )
        i = i + 1

FahrenheitToCelsius(100)