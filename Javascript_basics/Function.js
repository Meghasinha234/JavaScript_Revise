function saymyName(){
    console.log("Hello Megha")
}
saymyName()
function AddTwoNumber(num1,num2){
    console.log(num1+num2);
}
function AddNumbers(num1,num2,num3){
    return num1+num2+num3;
}
AddTwoNumber(1,2)
let result=AddNumbers(1,2,4)
console.log(result);
function login(username){
   return `${username} logged in`
}
console.log(login("megha"));
//if u will not pass any argument it will take it as undefined , u can use if/else for checking
