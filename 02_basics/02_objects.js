//const tinderuser=new Object()// singelton object
//const tinderUser={} // non-singelton objects

const user1={
    username:"Ayush Katiyar",
    Mno:8114235107,
    email:"ayushkatiyar0908@gmail.com"
}
const user2={
    username:"Piyush Katiyar",
    age:15,
    email:"piushkatiyar2011@gmail.com"
}
const user3={...user1, ...user2}
console.log(user3);
console.log(Object.keys(user3))
console.log(Object.values(user3))
console.log(Object.entries(user3))
