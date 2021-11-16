window.addEventListener("load", function (){
    console.log("Az oldal betöltődött");
});

var myFirstArray = ["1984", "Lord of the rings", "A Mester és Margarita", "Galatikus utikalauz stopposoknak", "Vita Brevis"];

console.log(myFirstArray[0]);

MyFirstObject = { title: "Lord of the rings", publicationDate: 1954, translations: ["hu", "de", "fr", "jp"] }

console.log(MyFirstObject.title);
console.log(MyFirstObject["title"]);

function ifElseCheck(text) {
    if (text === "hello") {
        console.log("text az volt, hogy hello");
    } else if (text === "hello") {
        Conslole.log("a text megint az volt, hogy hello");
    }
    if (text === "hello") {
        console.log("A text már megint hello");
    }
}
ifElseCheck("hello");

function compare(a,b) {
    console.log("== ", a==b);
    console.log("=== ", a===b);
    var c = a*b;
    console.log(typeof c);
}

compare ("1984", 1984);
compare ("15", "15");

var myFirstFunctionVariable = function() {
    console.log("ez egy függvény, amit változóban tároltunk el");
}
myFirstFunctionVariable();

(function(){
    console.log("?");
}());

var anotherVar = myFirstFunctionVariable();
//anotherVar();
console.log(typeof anotherVar); //undefined, mert már lefutott a függvény

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();

function theLastFunction(obj1, obj2){
    console.log("obj1 értéke: ", obj1);
    console.log("obj1 típusa: ", typeof obj1);
    console.log("obj2 értéke: ", obj2);
    console.log("obj2 típusa: ", typeof obj2);
    console.log(obj2());
}

theLastFunction("hello", function (){
    return "I'm calling the last function";
});

/* 
var window = {
    addEventListener: function (eventName, eventFunction){
        ...
    }
}
*/