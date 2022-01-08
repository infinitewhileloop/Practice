// https://edabit.com/challenge/9ZZ2zGwgPfbAxQa86

function simplifyList(list) {

    return list.reduce((acc, cur) => {

        let sameProduct = acc.find(product => product.brand === cur.brand && product.name === cur.name);

        if (sameProduct) {
            sameProduct.count++;
            return acc;
        } else {
            acc.push(cur);
            acc[acc.length - 1].count = 1;
            return acc;
        }

    }, []);
}
