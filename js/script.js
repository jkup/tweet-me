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

    // var directions = [canMoveUp, canMoveRight, canMoveDown, canMoveLeft].filter(function(value) { return value; });

    do {
        var movement = movements[Math.floor(Math.random() * movements.length)];
        var result = window[movement](currentPos.top, currentPos.left);
    } while ( result );
}

function moveUpAndRight(top, left) {
    var canMoveUp = (top + 25) < height;
    var canMoveRight = (left + 25) < width;

    if ( canMoveUp && canMoveRight ) {
        button.style.top = top - 25 + 'px';
        button.style.left = left + 25 + 'px';
        return true;
    } else {
        return false;
    }
}

function moveDownAndRight(top, left) {
    var canMoveRight = (left + 25) < width;
    var canMoveDown = (top - 25) > 0;

    if ( canMoveRight && canMoveDown ) {
        button.style.top = top + 25 + 'px';
        button.style.left = left + 25 + 'px';
        return true;
    } else {
        return false;
    }
}

function moveDownAndLeft(top, left) {
    var canMoveDown = (top - 25) > 0;
    var canMoveLeft = (left - 25) > 0;

    if ( canMoveDown && canMoveLeft ) {
        button.style.top = top + 25 + 'px';
        button.style.left = left - 25 + 'px';
        return true;
    } else {
        return false;
    }
}

function moveUpAndLeft(top, left) {
    var canMoveUp = (top + 25) < height;
    var canMoveLeft = (left - 25) > 0;

    if ( canMoveUp && canMoveLeft ) {
        button.style.top = top - 25 + 'px';
        button.style.left = left - 25 + 'px';
        return true
    } else {
        return false;
    }
}