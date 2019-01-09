String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

document.body.innerHTML = document.body.innerHTML.replaceAll('Yoga', 'Yova');
document.body.innerHTML = document.body.innerHTML.replaceAll('YOGA', 'YOVA');
document.body.innerHTML = document.body.innerHTML.replaceAll('yoga', 'yova');