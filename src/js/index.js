/** Example 01 creating object and adding properties*/

const person ={
    firstName : 'Koseksi',
    lastName :'P',
    gender: 'Male',
    height:'5.7'
}

console.log(typeof person);
console.log(person)

/** We can add the properties dynamically by using person.favColor ='white'  or person["favColor"] ='white' */
/** person.favColor= "white" */
person["favColor"]= "yellow" 

/** We can get the specific property by using person.fistName or person["fistName"]  */
console.log(person.firstName) 
console.log(person["firstName"]) 
console.log(person)

/** To delete properties from object use delete person.favColor or delete person["favColor"] */
/** delete person.favColor */
delete person["favColor"]
console.log(person)

/** Example 01 creating object and adding properties*/


/** Example 02 adding methods*/
const person2 ={
    firstName : 'Koseksi',
    lastName :'P',
    gender: 'Male',
    height:'5.7',
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

console.log(person2)
person2.fullName();

/** We can add methods from outside also by using reference type */
person2.getHeight= function(){
    console.log(this.height);
}

person2.getHeight();
/** Example 02 adding methods*/



