Array.prototype.slice.call(document.getElementsByTagName('td')).forEach(e => {
    e.contentEditable = true;
});