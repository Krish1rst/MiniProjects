// let user={
//     username:'krishna',
//     sayHi (){
//         console.log(`hello ${this.username}`)
//     }
// }
// setTimeout(user.sayHi,1000)
//output :  hello undefined


// let user={

//     sayHi (){
//        let username='krishna';
//         console.log(`hello ${username}`)
//     }
// }
// setTimeout(user.sayHi,1000)
//hello krishna


// const me=function(){
//    console.log('hello krishna')
   
// }
// console.log(me());


let user={
    username:'krishna',
}
let func = function sayHi (){
    console.log(`hello ${this.username}`);
}
setTimeout(func.bind(user),1000)