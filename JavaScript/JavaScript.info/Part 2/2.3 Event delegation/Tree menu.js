/*
<style>
    .li-span:hover {
        font-weight: bold;
        cursor: pointer;
    }
</style>
*/

// add spans inside lis to ensure clicks outside node title (on empty space) have no effect
let lis = document.querySelectorAll('.tree li');
lis.forEach(li => {
    let text = li.firstChild.textContent;
    li.firstChild.remove();
    li.insertAdjacentHTML('afterbegin', `<span class="li-span">${text.trim()}</span>`);       
});

tree.onclick = function(ev) {
    let parent = ev.target.parentElement;

    if (parent.tagName === 'LI' 
        && parent.childElementCount > 1 // exclude lis without a child ul
        && parent.children[1].tagName === 'UL') {
            
            parent.children[1].hidden = !parent.children[1].hidden;
        }
};
