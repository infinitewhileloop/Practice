# https://edabit.com/challenge/eA94BuKYjwMoNQSE2

import re
def correct_signs(txt):
    while re.findall('\d+ [<>] \d+', txt):
        regex = re.findall('\d+ [<>] \d+', txt)
        if not eval(regex[0]):
            return False
        else:
            txt = re.sub('\d+ [<>] ', '', txt, count=1)
    return True
