// toggle the drop down menu on click of arrow icon

let toggle = function () {
    let mydiv = document.getElementById('list');
    if (mydiv.style.display === 'block')
        mydiv.style.display = 'none';
    else
        mydiv.style.display = 'block';
};