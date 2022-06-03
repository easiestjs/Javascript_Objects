/** Example 01 creating object and adding properties*/

const person ={
    firstName : 'Koseksi',
    lastName :'P',
    gender: 'Male',
    height:'5.7'
}

console.log(typeof person);
console.log(person)

/** We can add the properties dynamically by using person.favColor ='white' */
person.favColor= "white" 
/** OR */
/** We can add the properties dynamically by using person["favColor"] ='white' */
person["favColor"]= "yellow" 

/** We can get the specific property by using person.fistName */
console.log(person.firstName) 

/** OR */
/** We can get the specific property by using person["fistName"] */
console.log(person["firstName"]) 
console.log(person)

/** Example 01 creating object and adding properties*/


