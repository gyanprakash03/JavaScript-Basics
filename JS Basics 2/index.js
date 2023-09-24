console.log('hehehe');

// const circle = {

//     radius: 5,
//     circumference: 31,

//     draw: function() {
//         console.log('drawing circle');
//     }
// };

// ************Factory function************

// function createCircle(rad, circum) {

//     return circle = {

//         radius: rad,
//         circumference: circum,
    
//         draw: function() {
//             console.log('drawing circle');
//         }
//     };

// }

// let circle1 = createCircle(2,13);

// ************Constructor function***********

function Circle(rad,circum) {

    this.radius = rad;
    this.circumference = circum;

    this.draw= function() {
        console.log('drawing circle');
    }

}

let circle1 = new Circle(2,13);

circle1.color = 'blue';
console.log(circle1.color);
delete circle1.color;
console.log(circle1.color);

// for (const key in circle1) {
//     console.log(key,circle1[key]);
// }

// ***********cloning objects**********

// let dest= {};

// for (let key in circle1) {
//     dest[key] = circle1[key];
// }

// circle1.radius = 5;
// console.log(circle1);
// console.log(dest);

// *************

// let dest = Object.assign({},circle1);

// circle1.circumference = 20;
// console.log(circle1);
// console.log(dest);

// **************

let dest = {...circle1};

circle1.circumference = 20;
console.log(circle1);
console.log(dest);