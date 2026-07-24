function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500))

const anyobject={
    name:"computer science",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObject(anyobject);

const mynewArray=[200,400,100,600]

function returnsecondvalue(getArray){
    return getArray[3]
}
console.log(returnsecondvalue([200,400,100,600]))