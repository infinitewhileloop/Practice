# https://edabit.com/challenge/QFXMcwaQZ8FTAuEtg

import re
def counterpartCharCode(char):
    code = ord(char)
    if not re.search('[a-z]', char, re.I):
        return code
    elif code < 97:
        return code + 32
    else:
        return code - 32
