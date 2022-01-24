// https://javascript.info/arraybuffer-binary-arrays#concatenate-typed-arrays

function concat(arrays) {

    const totalLength = arrays.reduce((acc, cur) => acc + cur.byteLength, 0);
    
    const buffer = new ArrayBuffer(totalLength);
    const view = new Uint8Array(buffer);

    let count = 0;
    arrays.forEach(array => {
        array.forEach(int => {
            view[count] = int;
            count++;
        });
    });

    return view;
}
