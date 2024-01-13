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