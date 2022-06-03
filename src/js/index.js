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

person2.getLastName= function(){
    return this.lastName;
}

console.log('lastname ',person2.getLastName())
/** Example 02 adding methods*/

/** Example 03 Creating objects using class keyword*/
class Movie {
    constructor(name,year, review){
        console.log('consturctor initialization')
        this.name=name;
        this.year=year;
        this.review=review;
    }

    updateReviews(review){
        this.review= review;
        return this;
    }

    getMovieNameAndYear(){
        return { year: this.year , name :this.name }
    }

}

/** To create object we need to use new keyword */
const movie1 = new Movie('RRR','2022','3.9');
console.log(typeof movie1);
console.log(movie1)
console.log(movie1.name)
console.log(movie1.updateReviews("4.2"));
console.log(movie1.getMovieNameAndYear());


const movie2 = new Movie('KGF Chapter2','2022','3.7');
console.log(typeof movie2);
console.log(movie2)
console.log(movie2.name)
console.log(movie2.updateReviews("4.0"));
console.log(movie2.getMovieNameAndYear());

/** Example 03 Creating objects using class keyword*/

/** Example 04 Adding Inheritance*/
class Movie2 {
    constructor(name,year, review){
        this.name=name;
        this.year=year;
        this.review=review;
    }

    updateReviews(review){
        this.review= review;
        return this;
    }

    getMovieNameAndYear(){
        return { year: this.year , name :this.name }
    }
}

class Hollywood extends Movie2{
    constructor(name,year, review, budget){
        super(name,year,review);
        this.budget =budget;
    }

    getMovieYear(){
        return this.year;
    }
}

const hyMovie = new Hollywood('Peter Rabbit','2021','3.2','High');
console.log(hyMovie.getMovieNameAndYear())
console.log(hyMovie.updateReviews('4.2'))

/** Example 04 Adding Inheritance*/
