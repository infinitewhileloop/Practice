// https://exercism.org/tracks/javascript/exercises/coordinate-transformation

function translate2d(dx, dy) {

    return function(ox, oy) {
        return [ox + dx, oy + dy];
    }
}

function scale2d(sx, sy) {

    return function(ox, oy) {
        return [ox * sx, oy * sy];
    }
}

function composeTransformation(f, g) {

    return function(x, y) {
        return g(...f(x, y));
    }
}

function memoizeTransform(cb) {

    let lastVals = [null, null];
    let lastResult = null;

    return function (x, y) {
        if (lastVals[0] === x && lastVals[1] === y) {
            return lastResult;
        } else {
            lastVals = [x, y];
            lastResult = cb(x, y);
            return lastResult;
        }
    }
}
