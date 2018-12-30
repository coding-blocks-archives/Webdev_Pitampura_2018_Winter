let button = document.getElementsByTagName('button')[0]

button.onclick = function () {
  setTimeout(function timer() {
        console.log('You clicked the button!');
    }, 2000);
}

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
