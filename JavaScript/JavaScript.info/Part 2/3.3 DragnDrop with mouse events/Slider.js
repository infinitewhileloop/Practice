let thumb = document.querySelector('.thumb');

thumb.onmousedown = function (ev) {

    thumb.style.zIndex = 1000;

    let shiftX = ev.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(ev) {

        let left = ev.pageX - shiftX;
        if (left < 0) left = 0;
        if (left > slider.offsetWidth - thumb.offsetWidth) left = slider.offsetWidth - thumb.offsetWidth;
        thumb.style.left = left + 'px';
    }

    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        thumb.onmouseup = null;
    };
};

thumb.ondragstart = function () {
    return false;
};
