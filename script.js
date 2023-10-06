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
        console.log("name");
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount("Murphy", 1);
console.log("name", user2);
