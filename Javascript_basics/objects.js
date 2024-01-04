//singleton  : constructor
//Object.create
//object literals
const sym=Symbol("key1")// primitive datatype:symbol
const user={
    name:"Megha",
    Age:21,
    email:"meghasinha761@gmail.com",
    "location":"Jharkhand",
    "Country Name":"India",
    sym:"Key"// [sym]:"key" and access it like: user[sym]
}
console.log(user.Age)
console.log(user["Age"])
console.log(user["location"])
console.log(user.location);
console.log(user["Country Name"]);// since there is space between country and name therefore we can not access like user.Country Name
console.log(typeof user.sym);//it is of string type not symbol
// user.Age=20;
// Object.freeze(user);
// user.Age=22;
// console.log(user.Age);
user.greeting=function(){
console.log(`hey user, ${this.email}`);
}
console.log(user.greeting);
console.log(user.greeting());

