#https://edabit.com/challenge/GbyPdqNnp75Wci7Cn

def count_ones(num):
    bn = bin(num)
    strng = str(bn)
    count = 0
    for char in strng:
        if char == '1':
            count = count + 1
    return count
