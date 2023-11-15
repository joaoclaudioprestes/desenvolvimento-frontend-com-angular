const number = [];
const par = [];

for (let i = 0; i <= 100; i++) {
    number.push(i)
};

// console.log(number.join('-'))

for (let i = 0; i <= 100; i++) {
    if (number[i] % 2 == 0) {
        par.push(number[i]);
    };
};

console.log(par.join('-'))