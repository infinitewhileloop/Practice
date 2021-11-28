// https://www.codewars.com/kata/55c0ac142326fdf18d0000af/

function Cube(side) {

    this._side = side || 0;
    this.getSide = function() {
        return this._side;
    }
    this.setSide = function(newVal) {
        if (isNaN(newVal)) return;
        this._side = Math.abs(newVal);
    }
}
