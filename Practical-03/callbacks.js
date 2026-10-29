
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Task completed");
}

greet("Student", finish);
