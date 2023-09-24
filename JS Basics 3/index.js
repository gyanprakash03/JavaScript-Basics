// **********string***********

let word = new String("javascript");

console.log(word);

let brokenString = `my name
is gyan`;

console.log(brokenString);

let sineOf90 = Math.sin(90*((Math.PI)/180));

console.log(sineOf90);

// **********array************

let arr = [1,2,3,4,5];

arr.push(6);
arr.unshift(0);
arr.splice(2,0,9,8);

console.log(arr);

console.log(arr.includes(9));

var students= [
    {id:1, grade:5},
    {id:2, grade:6}
];

let student1 = students.find(function(student) {
    return student.id === 1;
})

console.log(student1);

arr.pop();
arr.shift();
arr.splice(1,2);

console.log(arr);

// arr.length = 0;
arr.splice(0,arr.length);
console.log(arr);

let first = [1,2,3,4];
let second = [5,6,7,8];

let combined = first.concat(second);
console.log(combined);

let sliced = combined.slice(2,4);
console.log(sliced);

// for (const number of combined) {
//     console.log(number);
// }

combined.forEach(number => console.log(number))

let joined = combined.join('*');
console.log(joined);

combined.reverse();
console.log(combined);

combined.sort();
console.log(combined);

var students= [
    {id:3, grade:7},
    {id:1, grade:5},
    {id:2, grade:6},
];

students.sort((student1,student2) => {
    if (student1.id < student2.id) {
        return -1;
    }
    else if (student1.id > student2.id) {
        return 1;
    }
    return 0;
})

console.log(students);

let filtered = students.filter(student => student.id<3);
console.log(filtered);

let code_numbers = [23,54,266,892];

let mapped = code_numbers.map(function(code_no) {
    return {code: code_no};
})

console.log(mapped);