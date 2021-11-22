// https://javascript.info/regexp-lookahead-lookbehind#insert-after-head

let regex = /(?<=<body[^>]*)>/g; 

str = str.replace(regex, `><h1>Hello</h1>`);
