// let marks = [85, 92, 78, 90, 67, 88, 76, 95, 89, 73, 84, 91, 77, 82, 94];

// marks.forEach((mark) => {
//     if (mark >= 80 && mark <= 100) {
//         console.log(`Mark: ${mark} + Grade: A+`);
//     } else if (mark >= 70) {
//         console.log(`Mark: ${mark} + Grade: A`);
//     } else if (mark >= 60) {
//         console.log(`Mark: ${mark} + Grade: A-`);
//     } else if (mark >= 50) {
//         console.log(`Mark: ${mark} + Grade: B`);
//     } else if (mark >= 40) {
//         console.log(`Mark: ${mark} + Grade: C`);
//     } else if (mark >= 33) {
//         console.log(`Mark: ${mark} + Grade: D`);
//     } else {
//         console.log(`Mark: ${mark} + Grade: F`);
//     }
// })

          //NESTED LOOPS//
 
// section A : 12, 45, 67, 23, 89, 34, 56, 78, 90, 11
// section B : 45, 50, 67, 23, 69, 34, 46, 78, 80, 11
// section C : 19, 44, 69, 22, 88, 34, 59, 78, 40, 91

// let marks = [
//     [12, 45, 67, 23, 89, 34, 56, 78, 90, 11],
//     [45, 50, 67, 23, 69, 34, 46, 78, 80, 11],
//     [19, 44, 69, 22, 88, 34, 59, 78, 40, 91]
// ]


// for (let i = 0; i < 3; i++) {
//     if (i == 0) {
//         console.log("Section A");
//     } else if (i == 1) {
//         console.log("Section B");
//     } else {
//         console.log("Section C");
//     }
//     for (let j = 0; j < 10; j++) {
//         if (marks[i][j] >= 80 && marks[i][j] <= 100) {
//             console.log(`Mark: ${marks[i][j]} + Grade: A+`);
//         } else if (marks[i][j] >= 70) {
//             console.log(`Mark: ${marks[i][j]} + Grade: A`);
//         } else if (marks[i][j] >= 60) {
//             console.log(`Mark: ${marks[i][j]} + Grade: A-`);
//         } else if (marks[i][j] >= 50) {
//             console.log(`Mark: ${marks[i][j]} + Grade: B`);
//         } else if (marks[i][j] >= 40) {
//             console.log(`Mark: ${marks[i][j]} + Grade: C`);
//         } else if (marks[i][j] >= 33) {
//             console.log(`Mark: ${marks[i][j]} + Grade: D`);
//         } else {
//             console.log(`Mark: ${marks[i][j]} + Grade: F`);
//         }
//     }
// }