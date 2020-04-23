// Method 1
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


// fizzbuzz()


// Method 2:
function fizzbuzz2() {

    for (let i = 1; i <= 100; i++) {
        const fuzz = i % 3 === 0;
        const buzz = i % 5 == 0;
        if (fuzz && buzz) {
            console.log("FizzBuzz");
        } else if (fuzz && !buzz) {
            console.log("Fizz");
        } else if (buzz && !fuzz) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz2()