"use strict";
let channel = 'Gaveta';
let subscribers = 610234;
// channel = subscribers;
console.log(`Canal ${channel} possui ${subscribers} inscritos`);
// test noImplicityAny flag
// function sum(numA, numB) {
//   return numA + numB;
// }
// No used Parameter
function salute(isMorning /*, time: number */) {
    // No used local
    // let random;
    let salutation;
    // A case where stricNullChecks gets a error
    // if (isMorning) {
    //   return salutation = 'Bom dia';
    // }
    // return salutation;
    // Correct way of use
    if (isMorning) {
        salutation = 'Bom dia';
    }
    else {
        salutation = 'Tenha uma boa vida';
    }
    return salutation;
}
//# sourceMappingURL=compiler.js.map