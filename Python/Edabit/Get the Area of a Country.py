# https://edabit.com/challenge/Cjtm4CpLzHDerQMfX

def area_of_country(country, area):
    total_area = 148940000
    area_percentage = round(area / total_area * 100, 2)
    return '{} is {}% of the total world\'s landmass'.format(country, area_percentage)
    
    
