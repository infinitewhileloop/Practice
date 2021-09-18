# https://edabit.com/challenge/nfWirHJzNRBMAp9Df

def hamming_distance(txt1, txt2):
    counter = 0
    for index in range(len(txt1)):
        if txt1[index] != txt2[index]:
            counter = counter + 1
    return counter
