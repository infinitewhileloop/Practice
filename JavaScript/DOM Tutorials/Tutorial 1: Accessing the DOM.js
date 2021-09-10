// https://dom-tutorials.appspot.com/static/1.html

function treeWalker(node) {

    console.log(node);

    if (node.childNodes.length != 0) {
        treeWalker(node.firstChild);
    } else if (node.nextSibling != null) {
        treeWalker(node.nextSibling);
    } else if (node.parentNode.nextSibling != null) {
        treeWalker(node.parentNode.nextSibling);
    } else {
        return;
    }
}
