//primitive 

// 7 types : string , number,  boolean , null , undefined , symbol, BigINt

const score = 100
const scoreId=false

const id=Symbol("123")
const Anotherid=Symbol("123")
console.log(id==Anotherid)

//refrence (non primitive)

//array. , objects, functions

const arr=[10,2,3,4,5]
let myObj={
    name: "mayank",
    age:22
}

const myFunction=function()
{
    console.log("hello world");
}


console.log(typeof myObj);


//++++++++++++++++memory

//stack(primitive), heap(non-primitive)

 let myName="mayank"

 let anothername=myName
 anothername="sam"

 console.log(myName)
 console.log(anothername)

 let user={
    email: "user@gmail.com",
    upi: "user@ybl"
 }
 console.log(user);
