var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = (w.innerWidth || e.clientWidth || g.clientWidth) - 50,
    height = (w.innerHeight || e.clientHeight|| g.clientHeight) - 50;

var movements = ['moveUpAndRight', 'moveDownAndRight', 'moveDownAndLeft', 'moveUpAndLeft'];

var button = document.getElementById('tweet-me');
button.addEventListener('mouseover', bumpIt);

function bumpIt(e) {
    // Make an object with the tweet button's current position
    var currentPos = {
        top: parseInt(button.style.top, 10),
        left: parseInt(button.style.left, 10)
    };

    var canMoveUp = (currentPos.top + 25) < height;
    var canMoveRight = (currentPos.left + 25) < width;
    var canMoveDown = (currentPos.top - 25) > 0;
    var canMoveLeft = (currentPos.left - 25) > 0;

    var directions = [canMoveUp, canMoveRight, canMoveDown, canMoveLeft].filter(function(value) { return value; });

    var movement = movements[Math.floor(Math.random() * movements.length)];
    console.log(movement);

    button.style.top = currentPos.top + 25 + 'px';
    button.style.left = currentPos.left + 25 + 'px';
}