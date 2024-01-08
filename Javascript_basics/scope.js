if(true){
    const a=10;
    let b=20;
    var c=30;//accessible even outside this 
}
console.log(c);//that's why we avoid using var
//hoisting
console.log(addnum(5,6));//you will be able to access
function addnum(num1,num2){
    return num1+num2;
}
console.log(subnum(5,4))//you can not access
const sub=function subnum(num1,num2){
    return num1-num2;
}