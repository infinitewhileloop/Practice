# https://edabit.com/challenge/Ggq8GtYPeHJQg4v7q

import re
def replace_vowels(txt, ch):
    return re.sub('[aeiou]', ch, txt)
