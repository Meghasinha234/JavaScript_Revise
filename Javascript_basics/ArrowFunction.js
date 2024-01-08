const user={
    name:"Megha",
    Welcome:function(){
        console.log(`${this.name},Welcome`);
        console.log(this);
    }
}
user.Welcome()
console.log(this);//here this will return empty object but in browser u will get window object
//Arrow function
//we can not use this in arrow function(it will return empty object) but we can in normal function
const add=(num1,num2)=>{
return num1+num2;
}
console.log(add(4,5));
const sub=(num1,num2)=>(num1-num2);
console.log(sub(7,2));