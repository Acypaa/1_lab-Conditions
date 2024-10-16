// function manyChecks() {
//     let a = Math.floor(Math.random() * 20) + 1;
//     console.log(`a = ${a}`);
    
//     return (
//       a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
//   }
  
//   manyChecks();
  
  // условие с условным (тернарным) оператором перевести в if...else И switch()
  // результат выводить в консоль, с пощью console.log()

// 1 if...else  

// function manyChecks() {
//     let a = Math.floor(Math.random() * 20) + 1;
//     console.log(`a = ${a}`);
//     let res = '';
//     if (a > 10) {
//         res += 'a is bigger than 10';
//     } else {
//         res += 'a is less than or equal to 10';
//     }
//     if (a === 5) {
//         res += ' an example of a special case';
//     } else {
//         res += '';
//     }
//     if (a !== 15) {
//         res += ' but a is not 15';
//     } else {
//         res += '';
//     }
//     if (a > 5) {
//         res += ' and a is greater than 5';
//     } else {
//         res += ' and a is less than or equal to 5';
//     }
//     if (a % 2 === 0) {
//         res += ' and a is even';
//     } else {
//         res += ' and a is odd';
//     }
//     return res;
// }
// const output = manyChecks();  
// console.log(output);

// 2

// function manyChecks() {
//     let a = Math.floor(Math.random() * 20) + 1;
//     console.log(`a = ${a}`);
//     let res = ''; 
//     switch (true) {
//         case (a > 10):
//             res += 'a is bigger than 10';
//             break;
//         case (a <= 10):
//             res += 'a is less than or equal to 10';
//             break;
//     }
//     switch (a) {
//         case 5:
//             res += ' an example of a special case';
//             break;
//     }
//     switch (true) {
//         case (a !== 15):
//             res += ' but a is not 15';
//             break;
//     }
//     switch (true) {
//         case (a > 5):
//             res += ' and a is greater than 5';
//             break;
//         case (a <= 5):
//             res += ' and a is less than or equal to 5';
//             break;
//     }
//     switch (a % 2) {
//         case 1:
//             res += ' and a is odd';
//             break;
//         case 0:
//             res += ' and a is even';
//             break;
//     }
//     return res;
// }
// const output = manyChecks();  
// console.log(output);