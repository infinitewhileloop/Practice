#https://edabit.com/challenge/tgEWKRQD8hu5dD3pX

def mood_today(*args):
    if len(args):
        word = args[0]
    else:
        word = 'neutral'
    return 'Today, I am feeling ' + word
