# https://edabit.com/challenge/7vN8ZRw43yuWNoy3Y

import re
def parse_code(txt):
    dct = dict()
    fname = re.search('^[^0]+', txt)
    dct['first_name'] = fname.group()
    lname = re.search('0([a-z]+)0', txt, re.I)
    dct['last_name'] = lname.group(1)
    id = re.search('[^0]+$', txt)
    dct['id'] = id.group()
    return dct
