const log = console.log;

const foo = process.argv.slice(2).reduce((acc, cur, index) => {
    return acc + Number(cur);
}, 0);

log(foo);
