// https://www.codewars.com/kata/58b57ae2724e3c63df000006/train/javascript

const hexToDec = (hex) => parseInt(hex, 16);

function parseHTMLColor(color) {
  if (!color.startsWith('#')) {
    color = PRESET_COLORS[color.toLowerCase()];
  }

  if (/^#[A-F\d]{3}$/i.test(color)) {
    color = color[1].repeat(2) + color[2].repeat(2) + color[3].repeat(2);
  }

  const rgb = color.match(/[^#]{2}/g);
  return { r: hexToDec(rgb[0]), g: hexToDec(rgb[1]), b: hexToDec(rgb[2]) };
}
