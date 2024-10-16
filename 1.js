// let a = Math.floor(Math.random() * 100);
// (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

// 1 if...else

// let a = Math.floor(Math.random() * 100);
// let res;
// if (a > 10) {
//     if (a > 5) {
//         res = (2 * a) + 1;
//     }
//     else {
//         res = (2 * a) + 1;
//     };
// } 
// else {
//     if (a < 3) {
//         res = 1;
//     }
//     else {
//         let b = 2 * (a - 2);
//         if (b > 4) {
//             res = 5;
//         }
//         else {
//             if (a % 2 == 0) {
//                 res = 6;
//             }
//             else {
//                 res = 7;
//             }
//         }
//     }
// }
// console.log(res)


// 2 switch()

// let a = Math.floor(Math.random() * 100);
// let res;
// switch(true) {
//     case(a > 10 && a > 5):
//         res = (2 * a) + 1;
//         break;
//     case(a > 10):
//         res = (2 * a) + 1;
//         break;
//     case(a < 3):
//         res = 1;
//         break;
//     default:
//         let b = 2 * (a - 2);
//         switch(true) {
//             case(b > 4):
//                 res = 5;
//                 break;
//             case(a % 2 == 0):
//                 res = 6;
//                 break;
//             default:
//                 res = 7;
//                 break;
//         }
//         break;
// }
// console.log(res)



