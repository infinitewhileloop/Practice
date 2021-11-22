// https://javascript.info/regexp-groups#parse-an-expression

const parse = expr => {

    let regexp = /\s*(?<num1>-?\d+(\.\d+)?)\s*(?<op>[-+*\/])\s*(?<num2>-?\d+(\.\d+)?)\s*/;
    let output = expr.match(regexp).groups || [];
    return [output.num1, output.op, output.num2];
}
