// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name ="Spinny"
tinderuser.isloggedIn = false 

const regularuser = {
    email: "spinny@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            surname:"choudary"
        }
    }
}
// console.log(regularuser.fullname.userfullname.surname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderUser.hasOWnproperty('isLoggedIn'))



