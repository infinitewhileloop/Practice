# https://edabit.com/challenge/KHPFPaKpXmDeRoYQ3

def check_score(s):
    values = {
        '#': 5,
        'O': 3,
        'X': 1,
        '!': -1,
        '!!': -3,
        '!!!': -5}
    score = 0
    for row in s:
        for col in row:
            score += values[col]
    return max(0, score)
