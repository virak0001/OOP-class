// user class keyword
// start with capital letter


// class Student {
//     setFirstName(firstname) {
//         this.firstname = firstname;
//     }
//     getFirstName() {
//         console.log(this.firstname);
//     }
// }
// var student1 = new Student();
// student1.setFirstName('romdul');
// student1.getFirstName();

export default class User {
    setUser(username) {
        this.username = username;
    }
    getUser() {
        console.log(this.username);
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
}
var user1 = new User();
user1.setUser('virak');
user1.getUser();



class Person extends User {
    welcome () {
        console.log("welcome New Day");
    }
}
var p1 = new Person();
p1.welcome();