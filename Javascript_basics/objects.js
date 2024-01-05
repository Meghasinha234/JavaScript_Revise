//singleton  : constructor
//Object.create
// const user1=new Object();
// user1.id="123@12"
// user1.name="sam"
// console.log(user1);

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
//nested objects
const user2={
    fullname:{
        username:{
user2Name:"Megha Sinha"
        }
    }
}
console.log(user2.fullname.username);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
console.log({obj1,obj2});
const obj3=Object.assign({},obj1,obj2)//will return new objecets , object.assign(obj1,obj2) then obj1 will be same as obj3
const obj4={...obj1,...obj2}
console.log(obj3);
console.log(obj4);
console.log(Object.keys(obj1))
console.log(Object.values(obj1))