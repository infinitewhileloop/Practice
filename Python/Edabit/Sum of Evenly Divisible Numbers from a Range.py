# https://edabit.com/challenge/nWtgKSNGQ3sB52rQ8

def evenly_divisible(a, b, c):
    lst = []
    for x in range(a, b + 1):
        if x % c == 0:
            lst.append(x)
    return sum(lst)
