# https://edabit.com/challenge/nunJurLEibCyn8fzn

def filter_list(lst):
    lst_wo_str = list()
    for x in lst:
        if type(x) != str:
            lst_wo_str.append(x)
    return lst_wo_str
