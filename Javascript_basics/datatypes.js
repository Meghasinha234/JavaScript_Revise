"use strict" //treat code as a newer version of JS
// alert(3+3) //we are using node Js not browser
/*Datatypes
1.Number +> 2 to power 53
2.bigint
3.string=""
4.n=boolean+>true/false
//null+>standalone value
undefined
// symbol=>unique  */
// let Name="megha"
// console.log(typeof(Name));
// //Null is object 
// let score="23";
// console.log(typeof(score));
// let N= Number(score);
// console.log(typeof(N));
// let m="33ab"
// console.log(typeof Number(m));
// console.log(Number(m));
let value=3;
let negvalue=-value;
console.log(negvalue);
let str1="megha";
let str2=" Sinha";
let str3=str1+str2;
console.log(str3);
console.log("3"+7);
console.log(3+"7");
console.log(3+3+"7");
console.log("2"+(3+3));
console.log(2>3);
console.log("2">3); 
console.log(Number(null));
//=== strictly check(datatype also)
//primitive 7 types
//string,number,boolean,null,undefined,symbol,Bigint
//Reference or Non primitive
//Array,objects,functions
const id1=Symbol("123");
const id2=Symbol("123");
console.log(id1===id2);
console.log(id1==id2);
console.log(id1);
const bignumber=1234n;
console.log(typeof bignumber)
//Array
const heros=["megha","anjali"]
//objects
let myobj={
    name:"megs"
}
const fun=function(){
    console.log("heyy")
}
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof fun);