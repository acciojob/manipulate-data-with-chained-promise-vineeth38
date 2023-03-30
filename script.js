
new Promise(function(resolve, reject) {

setTimeout(() => resolve(1), 3000);

}).then(function(result) {

alert(result); // 1

return new Promise((resolve, reject) => { // (*)
setTimeout(() => resolve(result % 2 !== 0), 1000);
});

}).then(function(result) { // ()

alert(result); // 2

return new Promise((resolve, reject) => {
setTimeout(() => resolve(result * 2), 1000);
});

}).then(function(result) {

alert(result); // 4

});
const outputElement = document.getElementById('output');
sayHello().then((message) => {
outputElement.innerText = message;