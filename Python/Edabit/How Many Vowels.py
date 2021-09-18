#https://edabit.com/challenge/p88k8yHRPTMPt4bBo
import re
def count_vowels(txt):
    regex = re.findall('[aeiou]', txt, re.I)
    return len(regex)
