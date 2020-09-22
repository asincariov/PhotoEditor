var copyConform = window.confirm;
window.confirm = function (p, x) {
    if (p.search('We use advertisement') !== -1) return 1;
    copyConform(p);
}
