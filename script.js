var ul = document.querySelector('#get-cards');
var cards = ul.children;
var currentIndex = cards.length;

function myShuffle() {
    for (var i = currentIndex; i >= 0; i--) {
        ul.appendChild(cards[Math.random() * i | 0]);
    }
}

function mySort() {
    var i, switching, b, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        b = ul.getElementsByClassName("card");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}