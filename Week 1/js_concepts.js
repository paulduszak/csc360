/******************************************
1. Functions:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions 
******************************************/

// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// function square(number) {
//     return number * number;
// }

// const square = number => number * number;

// console.log(square(25));

// Primitive parameters (such as a number) are passed to functions by value; the value is passed to 
// the function, but if the function changes the value of the parameter, this change is not reflected 
// globally or in the calling function.

// If you pass an object (i.e., a non-primitive value, such as Array or a user-defined object) as a parameter 
// and the function changes the object's properties, that change is visible outside the function. 

// Function expressions are also another valid way to define a function
// Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

// const square = function(number) { return number * number }
// const x = square(4) // x gets the value 16

// However, a name can be provided with a function expression. Providing a name allows the 
// function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

// console.log(factorial(3))


///////////////////////////////////////////

/******************************************
 1. Variable Scope:
a = 10;		    // global scope
var b = 20;	    // function scope
let c = 30;	    // block scope
const d = 40;	// block scope
******************************************/

// function count() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// count();

// function count() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// count();

///////////////////////////////////////////

/******************************************
 2. const vs let
******************************************/

//  let a = 5;
//  a = 4;
//  console.log(a);

//  const b = 5;
//  b = 4;

///////////////////////////////////////////

/******************************************
 3. Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
******************************************/

//  function add() {
//      for (let a = 0, b = 20; a < 10; a+=1, b+=5) {
//         console.log(`${a} + ${b} equals ${a+b}`)
//      }
//  }

//  add();

///////////////////////////////////////////

/******************************************
 4. Object Literals
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind 
 ******************************************/

//  const student = {
//      name: "Paul",
//      courses: [
//         {
//             name: "Data Structures",
//             quarter: "Fall 2021"
//         },
//         {
//             name: "Algorithms",
//             quarter: "Fall 2020"
//         },
//      ],
//      printCourses: function() {
//          this.courses.forEach(course => console.log(`Course: ${course.name} taken during ${course.quarter}`));
//      }
//  }


 //`this` within the object refers to the object itself
//  student.printCourses();

 //invoking a method referencing `this` outside of the object results in `this` being undefined
//  const printCourses = student.printCourses;
//  printCourses();

// bind `this` to the person object in order to work around this issue
// const printCourses = student.printCourses.bind(student);
// printCourses();

/******************************************
 5. JSON

Object keys must be strings (i.e. a character sequence enclosed in double quotes ").
The values can be either:

a string
a number
an (JSON) object
an array
true
false
null

Duplicate keys ({"foo":"bar","foo":"baz"}) produce undefined, implementation-specific results; the 
JSON specification specifically does not define their semantics


 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON  
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 ******************************************/

const car = `
{
    "make": "Honda",
    "model": "Civic",
    "year":  2001,
    "owner": {
        "name": "Chengyu"
    }
}
`;

// console.log(car);
// console.log(car.year);

//const carObject = JSON.parse(car);
// console.log(carObject);
// console.log(carObject.year);
//console.log(JSON.stringify(carObject));


/******************************************
 6. Arrow Functions aka lambda expressions aka lambdas

Object keys must be strings (i.e. a character sequence enclosed in double quotes ").
The values can be either:
a string
a number
an (JSON) object
an array
true
false
null
Duplicate keys ({"foo":"bar","foo":"baz"}) produce undefined, implementation-specific results; the JSON specification specifically does not define their semantics
 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 ******************************************/

// Traditional Anonymous Function as arrow function
  
//   function (a){
//     return a + 100;
//   }
  
//   // Arrow Function Break Down
  
//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }
  
//   // 2. Remove the body braces and word "return" -- the return is implied.
//   (a) => a + 100;
  
//   // 3. Remove the argument parentheses
//   a => a + 100;

////////////////////////////////////////////////
// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:
////////////////////////////////////////////////

//   // Traditional Anonymous Function
//   function (a, b){
//     return a + b + 100;
//   }
  
//   // Arrow Function
//   (a, b) => a + b + 100;
  
//   // Traditional Anonymous Function (no arguments)
//   let a = 4;
//   let b = 2;
//   function (){
//     return a + b + 100;
//   }
  
//   // Arrow Function (no arguments)
//   let a = 4;
//   let b = 2;
//   () => a + b + 100;


////////////////////////////////////////////////
// If the body requires additional lines of processing, you'll need to re-introduce braces PLUS the "return" 
// (arrow functions do not magically guess what or when you want to "return"):
////////////////////////////////////////////////

// Traditional Anonymous Function
// function (a, b){
//     let chuck = 42;
//     return a + b + chuck;
//   }
  
//   // Arrow Function
//   (a, b) => {
//     let chuck = 42;
//     return a + b + chuck;
//   }

////////////////////////////////////////////////
// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:
////////////////////////////////////////////////

// Traditional Function
// function bob (a){
// return a + 100;
// }

// // Arrow Function
// let bob = a => a + 100;

// const addOneAndPrint = (a) => {
//     a = a+1;
//     console.log(a);
// }

// function addOneAndPrint (a) {
//     a = a+1;
//     console.log(a);
// }

////////////////////////////////////////////////
// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:
////////////////////////////////////////////////

// const students = [
//     {id: 345, name: 'Ben', grade: "A" },
//     {id: 234, name: 'Paul', grade: "D" },
//     {id: 435, name: 'Anish', grade: "B" },
//     {id: 456, name: 'Erin', grade: "A" },
//     {id: 765, name: 'Sam', grade: "C" },
//     {id: 876, name: 'Manzil', grade: "D" },
//     {id: 564, name: 'Kristine', grade: "B" }
// ]

// const gradeAStudents = students.filter(function(student) {return student.grade === "A";})
// console.log(gradeAStudents);

// const gradeAStudents = students.filter(student => student.grade === "A");
// console.log(gradeAStudents);

///////////////////////////////////////////

/******************************************
Destructuring
Expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
******************************************/

// const student = {id: 435, name: 'Anish', grade: "B" };

// const id = student.id;
// const name = student.name;
// const grade = student.grade; 

// console.log (`${id} ${name} ${grade}`)

// const {name} = student;
//const {id, grade, name} = student;


// function concatstudent({id, grade, name}) { console.log (`${id} ${name} ${grade}`) }
// concatstudent(student.id, student.grade, student.name)
// const {id, grade, name: n} = student; // referring to name with alias n

// console.log (`${id} ${n} ${grade}`)

// Array destructuring
// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2


/******************************************
Spread
Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
******************************************/

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, ...second];
// console.log(combined);
// const combined = [...first, 9, 5, ...second, 3];
// console.log(combined);

// Spread can be used to create a copy of an array
// const first_copy = [...first];

// Spread can be used to combine objects
// const student = { name: "Paul", course: "Hello" };
// const course = {course2: "Web Apps" };

// const combined = {...student, ...course, school: 'depaul'};
// const combined2 = {name: student.name, course: student.course, course2: course.course2}
// const combined_copy = {...combined};
// console.log(combined);
// console.log(combined_copy);

// console.log({...student, ...course})


///////////////////////////////////////////

/******************************************
Classes
Template for creating objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes 
******************************************/
//     //  const student = {
//     //      name: "Paul",
//     //      courses: [
//     //         {
//     //             name: "Data Structures",
//     //             quarter: "Fall 2021"
//     //         },
//     //         {
//     //             name: "Algorithms",
//     //             quarter: "Fall 2020"
//     //         },
//     //      ],
//     //      printCourses: function() {
//     //          this.courses.forEach(course => console.log(`Course: ${course.name} taken during ${course.quarter}`));
//     //      }
//     //  }

const Student = require('./student');
const Course = require('./course');

// class Student {
//     constructor(name, courses) {
//         this.name = name;
//         this.courses = courses;
//     }

//     printCourses = () => this.courses.forEach(course =>console.log(`Course: ${course.name} taken during ${course.quarter}`))
// }

// class Course {
//     constructor(name, quarter) {
//         this.name = name;
//         this.quarter = quarter;
//     }
// }

// // 

// const student = new Student("Paul", [new Course("Data Structures", "Fall 2021"), new Course("Algorithms", "Fall 2020")])

//  student.printCourses();

// // // Inheritance

// class TeacherAssistant extends Student {
//     constructor(name, courses, grading) {
//         super(name, courses);
//         this.grading = grading
//     }

//     printGradingCourses = () => this.grading.forEach(course => console.log(`Grading for: ${course.name}`));
// }

// const ta = new TeacherAssistant("Paul", [new Course("Data Structures", "Fall 2021")], [new Course("Algorithms", "Fall 2020")]);

// ta.printGradingCourses();


/******************************************
Modules
Create modules of the classes; default vs named exports
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
******************************************/

// modularize above classes


/******************************************
Common array methods - find, filter, map, forEach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
******************************************/

// find
// const arr = [{id: "324", name: "Paul"}, {id: "765", name: "Steve"}];
// const user = arr.find(element => element.id === "765");

// console.log(user.name);

// // map
const arr = [1, 2, 3, 4]
const arrPlus2 = arr.map((element) => element + 2);
console.log(arr);
console.log(arrPlus2);

// const test = {name: "Paul"}