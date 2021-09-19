# https://edabit.com/challenge/YfoKQWNeYETb9PYpw

def profit(info):
    gain = info['sell_price'] - info['cost_price']
    return round(gain * info['inventory'])
