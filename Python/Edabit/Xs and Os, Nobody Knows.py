# https://edabit.com/challenge/JSJEuuWduBB5hEX6k

def XO(txt):
    xs = 0
    os = 0
    for char in txt:
        if char == 'x' or char == 'X':
            xs = xs + 1
        elif char == 'o' or char == 'O':
            os = os + 1
    return xs == os
