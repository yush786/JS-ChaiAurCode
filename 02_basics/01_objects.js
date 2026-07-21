//singelton objects
const mysum=Symbol("key1")
const jsuser={
    name:"ayush katiyar",
    age:22,
    [mysum]:"key1",
    location:"ghaziabad",
    email:"ayushkatiyar0908@gmail.com",
    isLoggedIn:"false",
    lastlogindays:["Monday","Friday"],
    

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(typeof jsuser[mysum]);
//console.log(jsuser)



jsuser.greeting=function(){
    console.log("good morning")
}

jsuser.greeting2=function(){
    console.log(`hello jsuser,${this.name}`)
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());
