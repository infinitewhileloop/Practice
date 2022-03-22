// https://exercism.org/tracks/javascript/exercises/proverb/

function proverb(...args) {

    const lastItem = args[args.length - 1];
    const qualifier = lastItem?.qualifier;
    if (qualifier) args.pop();

    let result = '';
    args.forEach((word, index) => {

        if (index === args.length - 1) { // last item in array
            result += `And all for the want of a ${qualifier ? qualifier + ' ' : ''}${args[0]}.`;

        } else { // all items in array except last
            result += `For want of a ${word} the ${args[index + 1]} was lost.\n`;
        }
    });

    return result;
}
