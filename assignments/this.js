/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding is when 'this' binds to the browser window or to the base level of JavaScript.
* 2. Implicit Binding is when 'this' binds to the object before the '.' in a standard object call.
* 3. New Binding is when 'this' binds to a specific named instance of an object created by a constructor function using the 'new' keyword.
* 4. Explicit Binding is when 'call' or 'apply' methods are used to set an object.  The 'this' refers to whatever is in the ()'s.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function windowBinding() {
    console.log(this);
}
windowBinding();

// Principle 2
// code example for Implicit Binding
const implicitBindingObject = {
    bye: 'Bye',
    hi: 'Hi',
    sayhi : function(name) {
        console.log(`${this.hi}, ${name}!`);
    },
    saybye : function(name) {
        console.log(`${this.bye}, ${name}!`);
    }
}
implicitBindingObject.saybye('Lee');

// Principle 3
// code example for New Binding
function NewBindingObj(obj) {
    this.name = obj.name;
    this.school = obj.school;
    this.speak = function() {
        console.log(`${this.name} goes to ${this.school}.`);
    }
}
const lee = new NewBindingObj({name: 'Lee', school: 'Lambda'});
lee.speak();

// Principle 4
// code example for Explicit Binding
const gwyn = new NewBindingObj({name: 'Gwyn', school: 'elementary school'});
const hailey = new NewBindingObj({name: 'Hailey', school: 'no school'});

gwyn.speak.call(hailey); // call function used on gywn with hailey object
gwyn.speak(); // no change to gwyn object
gwyn.speak.apply(hailey); // apply function used on gwyn with hailey object
gwyn.speak(); // no change to gwyn object