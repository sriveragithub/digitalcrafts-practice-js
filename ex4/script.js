// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

const button = document.getElementById('myButton');

const boxes = document.getElementsByClassName('box');

const modifyBoxColor = function () {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'blue';
    }
}

button.addEventListener('click', modifyBoxColor);