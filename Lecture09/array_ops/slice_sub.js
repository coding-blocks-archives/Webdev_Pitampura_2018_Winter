let str = "this is a string"

let str2 = str.substr(6)

// negative indexes don't work
let str3 = str.substring(6,5)

// negative indexes work here
let str4 = str.slice(-7, -4)

// ======= arrays =========

let arr = [1,2,3,4,5,6,7,8,9]

let arr2 = arr.slice(6, 4)

// removes the items from the original array
let arr3 = arr.splice(4, 2)

let replacementArray = [10, 11]
let arr4 = arr.splice(4, 2, ...replacementArray)



