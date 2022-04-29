// https://github.com/domenic/count-to-6

const log = console.log;

function html(strings, ...values) {
  values = values.map((value) => replaceUnsafeChars(value));

  let res = '';
  strings.forEach((string, index) => {
    res += string + (values[index] || ''); // last value will always be undefined
  });

  return res;
}

log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function replaceUnsafeChars(str) {
  str = str.replace(/&/g, '&amp;'); // this one should come first, becomes other replacements use &
  str = str.replace(/'/g, '&apos;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  return str;
}
