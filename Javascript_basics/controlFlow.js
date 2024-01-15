if(2=="2"){
  console.log("equal");  
}
else if(2==="2"){
console.log("not equal");
}
const month=2;
  switch(month){
case 1:
  console.log("jan");
  break;
  case 2:
    console.log("feb");
    break;
    default:
      console.log("enter month properly");
      break;
  }
  let val;
  val=5??10;
  console.log(val);//5
  let val1=null??10;
  console.log(val1);//10
//for loop
const array=[1,2,4,"megs"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
  
}
//while loop
let i=0;
while (i<=2) {
  console.log(i);
  i++;
}
//do while loop
let index=10;
do {
  console.log(index);
  index++;
} while (index<10);
//for of
const arr=[1,2,3,4,5]
for (const iterator of arr) {
  console.log(iterator); 
}
const map=new Map();
map.set("IN","INDIA");
map.set("USA","United state of America");

for (const key of map) {
  console.log(key);
  
}
//this will not work for objects
for (const [key,value] of map) {
  console.log(key,"::",value);
  
}
//objects
const objects={
  Product:"Mobile",
  Price:10000

}
for (const key in objects) {
 
  console.log(key);
  console.log(objects[key]);
}
const arr1=[1,4,6,7];
arr1.forEach(function(values,index){
  console.log(values,index);
})
//we can use arrow function as well

arr1.forEach((values)=>{
  console.log(values);
})
//filter
const values=arr1.filter((num)=>{
if(num>1)return num;
})
console.log(values);
