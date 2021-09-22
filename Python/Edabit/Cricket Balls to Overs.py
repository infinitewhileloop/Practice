# https://edabit.com/challenge/guR6aa2zytfZvywMS

import math

def total_overs(balls):
    overs = math.floor(balls / 6)
    balls = balls % 6
    strng = '{}.{}'.format(overs, balls)
    flt = float(strng)
    return flt
    
