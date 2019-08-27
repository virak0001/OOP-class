import User from './oop.js'
class Person extends User {
    welcome () {
        console.log("");
    }
}
const p1 = new Person();
p1.setAge(70);
p1.getAge();