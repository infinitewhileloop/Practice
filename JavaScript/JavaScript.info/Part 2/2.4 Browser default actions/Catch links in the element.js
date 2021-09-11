contents.addEventListener('click', ev => {

  let aTag = ev.target.closest('a');

  if (aTag) {

    let confirmation = window.confirm('Are you sure you want to leave?');

    if (!confirmation) {

      ev.preventDefault();
    }
  }
});
