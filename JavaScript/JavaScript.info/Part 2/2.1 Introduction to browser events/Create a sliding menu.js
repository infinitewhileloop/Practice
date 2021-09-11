/*
<style>
    span {
        color: green;
    }
    div, span, ul {
        margin: 0px;
    }
    ul {
        list-style-type: none;
        padding-left: 20px;
    }
</style>
*/
    menu.addEventListener('click', showHideMenu);

    function showHideMenu(ev) {

        let status = ev.currentTarget.dataset.collapsed;

        let ul = document.querySelector('ul');

        if (status === 'yes') {

            arrowRight.setAttribute('hidden', '');
            arrowDown.removeAttribute('hidden');
            ul.removeAttribute('hidden');
            menu.setAttribute('data-collapsed', 'no');

        } else {

            arrowRight.removeAttribute('hidden');
            arrowDown.setAttribute('hidden', '');
            ul.setAttribute('hidden', '');
            menu.setAttribute('data-collapsed', 'yes');
        }
    }
