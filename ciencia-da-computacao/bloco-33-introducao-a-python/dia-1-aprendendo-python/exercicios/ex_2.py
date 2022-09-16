def calculate_average(numbers):
    sum = 0
    for number in numbers:
        sum += number
    average = sum / len(numbers)
    return average


print(calculate_average([43, 49, 3, 10]))