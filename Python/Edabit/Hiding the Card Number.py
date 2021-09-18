# https://edabit.com/challenge/iRCwdDBkNcHM5QeAm

def card_hide(card):
    length = len(card)
    stars = '*' * (length  - 4)
    ending = card[length - 4:]
    return stars + ending
