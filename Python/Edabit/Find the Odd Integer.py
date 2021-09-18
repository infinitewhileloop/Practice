# https://edabit.com/challenge/9TcXrWEGH3DaCgPBs

def find_odd(lst):
    counter = dict()
    for item in lst:
        counter[item] = counter.get(item, 0) + 1
    for key in counter:
        if counter[key] % 2 != 0:
            return key
