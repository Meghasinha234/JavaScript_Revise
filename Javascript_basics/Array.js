const myarray= [0,1,2,"megha"]
const array=new Array(1,2,3,4);
//Array method
myarray.push(6);// there is pop as well
console.log(myarray);
myarray.unshift(9);// insert 9 at the beginning
console.log(myarray);
myarray.shift();//will remove 9
console.log(myarray);
console.log(myarray.includes(10));
const newArr=myarray.join();// will change the type to string
console.log(newArr);
console.log(typeof newArr);
//slice will not manipulate original array but splice will
const myarr1= myarray.slice(1,3);
console.log(myarr1);
console.log(myarray);
const myarr2= myarray.splice(1,3);
console.log(myarr2);
console.log(myarray);