# Javascript Objects | Koseksi 

### Objects In Detail
- Normally Every programming language is contains objects and it support object oriennted programming concepts 
- Java Script also supports OOPS programming.
- In Javascript Objects are like containing properties, functions and methods.
- We can add and remove properties from that objects.
- In Javascript we can create objects in different ways.

### Steps:
- create variable in javascript file the name as person.
- the person contains firstname, lastname , gender , height etc.

### Example (1)

```bash

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

```