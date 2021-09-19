# https://edabit.com/challenge/9hQogtkbZSSJ8tYsG

def reverse(txt):
    swap = txt.swapcase()
    lst = list(swap)
    lst.reverse()
    return ''.join(lst)
