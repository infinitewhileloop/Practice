# https://edabit.com/challenge/5XXXppAdfcGaootD9

def sum_odd_and_even(input_lst):
    sum_odd = 0
    sum_even = 0
    for item in input_lst:
        if item % 2 == 0:
            sum_even += item
        else:
            sum_odd += item
    return [sum_even, sum_odd]
