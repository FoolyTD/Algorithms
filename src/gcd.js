/**
 * Write a function named gcd1 that implements algorithm 1 here
 */
 // accepts a - a non-negative integer
 //         b - a non-negative integer
function gcd1(a,b) {
//if a is equal to 0 then the GCD of a and b is b, so return b
if(a === 0) return b;
// if b is equal to 0 then the GCD of a and b is a, so return a
if(b === 0) return a;
/* while b is not 0 do
   let r be the remainder of dividing a by b
   set a to equal b
   set b to equal r
 return a */ 
 while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
}
return a;
}


 


/**
 * Write a function named gcd2 that implements algorithm 2 here
 */
// accepts a - a non-negative integer
//         b - a non-negative integer
function gcd2(a,b) {
//  if a is equal to 0 then the GCD of a and b is b, so return b
//  if b is equal to 0 then the GCD of a and b is a, so return a
    if (a === 0) return b;
    if (b === 0) return a;
//  initialize an array named divA with the value [1, a]
//  initialize an array named divB with the value [1, b]
//  initialize an empty array named common
    let divA = [1,a];
    let divB = [1,b];
    let common = [];
    for (let i = 2; i < a - 1; i++) {

    }
}
 





 for i = 2 to a - 1 do
   if a can be divided by i without a remainder then
     add i to the array divA

 for i = 2 to b - 1 do
   if b can be divided by i without a remainder then
     add i to the array divB

 for each number n in the array divA do:
   if n is in the array divB then
      add n to the array common

 initialize a variable named largest to the smallest possible number
 for each number n in commmon do:
   if n is greater than largest then
     assign largest the value n

 return largest

module.exports = { gcd1, gcd2 };
