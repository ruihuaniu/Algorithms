/*
Find the same values in two arrays
*/

const arr = [1, 2, 3, 8, 5, 100, 66, 36, 88]

const brr = [4, 5, 2, 9, 30, 6, 8, 36, 25, 99, 188, 77, 88, 123]

//method 1
console.time("brute force")
function bruteForce(arr, brr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < brr.length; j++) {
            if (arr[i] === brr[j]) {
                result.push(arr[i])
            }
        }
    }

    return result
}
console.timeEnd("brute force")


// method 2
console.time("sort method")
function sortMethod(arr, brr) {
    const result = []
    arr.sort((a, b) => a - b);
    brr.sort((a, b) => a - b);
    const middleIndex = Math.floor(brr.length / 2)   // to get the integer of middle index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < brr[middleIndex]) {
            for (let j = 0; j < middleIndex; j++) {
                if (arr[i] === brr[j]) {
                    result.push(arr[i])
                }
            }
        } else {
            for (let j = middleIndex; j < brr.length; j++) {
                if (arr[i] === brr[j]) {
                    result.push(arr[i])
                }
            }
        }

    }
    return result
}
console.timeEnd("sort method")


//method 3
console.time("high level")
function highLevel(arr, brr) {
    const result = arr.filter((item) => brr.includes(item))    // or const result = arr.filter((item) => brr.indexOf(item)!== -1)  
    return result
}
console.timeEnd("high level")




//method1 result
console.log(bruteForce(arr, brr));
//method 2 result
console.log(sortMethod(arr, brr));   // almost 10 times faster than method 1
//method 3 result
console.log(highLevel(arr, brr));    // almost 2 times faster than method 2, and 20 times faster than method 1



