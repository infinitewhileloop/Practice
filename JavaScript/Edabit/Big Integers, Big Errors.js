// https://edabit.com/challenge/uKkGLkDZSAaRAxwya

class Big {

    static max(...args) {

        // stop if no input is given
        if (args.length === 0) return null;
        if (args.flat(Infinity).join('') === '') return 'Big Error';

        let bigError = false;

        // convert all input to BigInt
        let converted = args.map(item => {
            let type = typeof item;
            if (type === 'bigint') return item;
            else if (type === 'number') {
                if (item <= Number.MAX_SAFE_INTEGER && Number.isInteger(item)) return BigInt(item);
                else bigError = true;
            } else if (type === 'string') {
                if (Number(item) <= Number.MAX_SAFE_INTEGER && Number.isInteger(Number(item))) return BigInt(Number(item));
                else bigError = true;
            } else {  // if item is array or object
                bigError = true;
            } 
        });

        // stop if input contains invalid data
        if (bigError) return 'Big Error';

        // find out which BigInt has highest value
        let max = -Infinity;
        converted.forEach(item => {
            if (item > max) {
                max = item;
            }
        });

        return max;
    }
}
