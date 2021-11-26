// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {

    if (f() > g()) return 'f';
    if (f() < g()) return 'g';
    else return 'neither';
}
