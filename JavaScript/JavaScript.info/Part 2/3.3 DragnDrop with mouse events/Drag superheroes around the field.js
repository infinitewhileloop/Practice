let draggables = document.querySelectorAll('.draggable');

draggables.forEach(item => {

    item.onmousedown = function (ev) {

        let shiftX = ev.clientX - item.getBoundingClientRect().left;
        let shiftY = ev.clientY - item.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(ev) {

            ev.preventDefault();

            let left = ev.pageX - shiftX;
            if (left < 0) left = 0;
            if (left > document.documentElement.clientWidth - item.offsetWidth) left = document.documentElement.clientWidth - item.offsetWidth;

            let top = ev.pageY - shiftY;
            if (top < 0) top = 0;

            item.style.position = 'absolute';
            item.style.left = left + 'px';
            item.style.top = top + 'px';

            if (ev.clientY - shiftY < 0) {
                scrollBy(0, -5);
            }
            if (ev.clientY - shiftY + item.clientHeight > document.documentElement.clientHeight) {
                scrollBy(0, 5);
            }
        }

        function onMouseUp(ev) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    };

    item.ondragstart = () => false;
});
