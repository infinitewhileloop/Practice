/*
ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}
*/

thumbs.onclick = function (ev) {

  let aTag = ev.target.closest('a');

  if (aTag && thumbs.contains(aTag)) {

    largeImg.src = aTag.href;

    return false;
  }
};
