function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);



//static typechecker (heigth)
const obj = { width: 10, height: 15 };
 const area = obj.width * obj.height;

//syntax (need to add ')' )
let a = (4)

//Types (must declare 'any', 'number', 'bigint', or enum type )
//console.log(4 / []);

//types by inferences
let helloworld = "Hello world"
console.log("hellooo", helloworld)
console.log("type",typeof(helloworld))


//Defining Types
interface User {
  name: string;
  id: number;
}
 
const user1: User = {
  name: "Hayes",
  id: 0,
};

//Interface declaration with classes
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 const user2: User = new UserAccount("Murphy", 1);
console.log("name", user2 )










