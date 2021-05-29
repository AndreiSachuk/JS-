var sayHelloTo = function (name) {
    console.log("Привет, " + name + "!");
    };

sayHelloTo("Андрей");

var draw = function(howManyTimes) {
    for (var i=0; i<howManyTimes; i++){
        console.log(i + "=^.^=");
    }
}
draw(10);

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};

printMultipleTimes(10, "Hello!")