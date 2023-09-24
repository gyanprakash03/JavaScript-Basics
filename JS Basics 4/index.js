// function declaration

function run(num) {
    console.log(num);
}

run(5);

// Named function assignment

let action1 = function running() {
    console.log('running');
}

action1();

// anonymous function assignment

let action2 = function() {
    console.log('jumping');
}

action2();

function product() {
    console.log(arguments);
    let pdt = 1;
    for (let value of arguments) {
        pdt = pdt*value;
    }
    return pdt;
}

console.log(product(3,4,6,1,8));

// rest operator

function rest(...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
}

console.log(rest(1,2,3,4,5,6));

// getter and setter

let game= {
    type: 'fps',
    mode: 'multiplayer',

    get description() {
        return `type: ${game.type} | mode: ${game.mode}`;
    },

    set description(value) {
        if(typeof(value) !== 'string') {
            throw('Input type must be string');
        }
        let arr = value.split(',');
        if (arr.length !== 2) {
            throw ('Input must contain two values separated by a comma');
        }
        game.type = arr[0];
        game.mode = arr[1];
    }
};

// console.log(game.description);

// try and catch and throw

try {
    game.description = 'racing,drag';
    console.log(game.description);
}
catch(err) {
    alert(err);
}

// reducing an array

const arr = [3,4,5,2,8];

let multiplication = arr.reduce((accumulator,currentValue) => accumulator*currentValue, 1);

console.log(multiplication);