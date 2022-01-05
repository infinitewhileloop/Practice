// https://exercism.org/tracks/javascript/exercises/darts/

function score(x, y) {

    x = Math.abs(x);
    y = Math.abs(y);

    const circles = {
        inner: {
            radius: 1,
            points: 10
        },
        middle: {
            radius: 5,
            points: 5
        },
        outer: {
            radius: 10,
            points: 1
        }
    }

    const distance = Math.sqrt(x ** 2 + y ** 2);

    if (distance <= circles.inner.radius) {
        return circles.inner.points;
    } else if (distance <= circles.middle.radius) {
        return circles.middle.points;
    } else if (distance <= circles.outer.radius) {
        return circles.outer.points;
    } else {
        return 0;
    }
}
