var button = document.getElementById('button');

button.addEventListener("mouseover", function() {
    moveElement();
});

function moveElement() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    var newLeft = Math.floor(Math.random() * (windowWidth - buttonWidth));
    var newTop = Math.floor(Math.random() * (windowHeight - buttonHeight));

    button.style.left = newLeft + 'px';
    button.style.top = newTop + 'px';
}


























