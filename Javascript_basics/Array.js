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
const arr1=["megha","anjali"]
const arr2=["suman","priya"]
// arr1.push(arr2);
// console.log(arr1);//array within array
// console.log(arr1[2][1]);
const arr3=arr1.concat(arr2);//will return new array after merging both arr1 and arr2
console.log(arr3);
//other way to merge array
const arr4=[...arr1,...arr2];
console.log(arr4);
const arr5=[1,2,[2,3],[3,4,5,[1,2]]];
console.log(arr5.flat(2));
console.log(Array.isArray("megha"));
console.log(Array.from("megha"));
let score1=100;
let score2=100;
let score3=100;
console.log(Array.of(score1,score2,score3))