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
console.log("Name", user2 )

//composing types (unions)
type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}

// function returning different values depending on string or array
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    console.log("yyyy",typeof obj )
    return [obj];
    
   }
  return obj;
}
const ex =wrapInArray("4320")
console.log("test",ex)
const ex1 = wrapInArray(["err","455"])
console.log("sample",ex1)


//generics
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 
// Since the backpack variable is a string, you can't pass a number to the add function.(23)
backpack.add("string");


//structural type system
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);










