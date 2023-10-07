function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
//static typechecker (heigth)
var obj = { width: 10, height: 15 };
var area = obj.width * obj.height;
//syntax (need to add ')' )
var a = (4);
//Types (must declare 'any', 'number', 'bigint', or enum type )
//console.log(4 / []);
//types by inferences
var helloworld = "Hello world";
console.log("hellooo", helloworld);
console.log("type", typeof (helloworld));
var user1 = {
    name: "Hayes",
    id: 0,
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount("Murphy", 1);
console.log("Name", user2);
function getLength(obj) {
    return obj.length;
}
// function returning different values depending on string or array
function wrapInArray(obj) {
    if (typeof obj === "string") {
        console.log("yyyy", typeof obj);
        return [obj];
    }
    return obj;
}
var ex = wrapInArray("4320");
console.log("test", ex);
var ex1 = wrapInArray(["err", "455"]);
console.log("sample", ex1);
// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.(23)
backpack.add("string");
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
function getLength(obj) {
    return obj.length;
}
// function returning different values depending on string or array
function wrapInArray(obj) {
    if (typeof obj === "string") {
        console.log("yyyy", typeof obj);
        return [obj];
    }
    return obj;
}
var ex = wrapInArray("4320");
console.log("test", ex);
var ex1 = wrapInArray(["err", "455"]);
console.log("sample", ex1);
// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.(23)
backpack.add("string");
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
