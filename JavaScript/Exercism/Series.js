// https://exercism.org/tracks/javascript/exercises/series

class Series {
  constructor(series) {
    this._series = series;
    this._seriesLength = series.length;
  }

  slices(sliceLength) {

    if (!this._series) throw new Error('series cannot be empty');
    if (sliceLength > this._seriesLength) throw new Error('slice length cannot be greater than series length');
    if (!sliceLength) throw new Error('slice length cannot be zero');
    if (Math.sign(sliceLength) === -1) throw new Error('slice length cannot be negative');

    let output = [];
    for (let i = 0; i <= this._seriesLength - sliceLength; i++) {
      let newVal = [...this._series.substr(i, sliceLength)].map(item => +item);
      output.push(newVal);
    }  // for
    return output;
  } // method
  
} // class
