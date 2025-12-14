let marks = [85, 92, 78, 90, 67, 88, 76, 95, 89, 73, 84, 91, 77, 82, 94];

marks.forEach((mark) => {
    if (mark >= 80 && mark <= 100) {
        console.log(`Mark: ${mark} + Grade: A+`);
    } else if (mark >= 70) {
        console.log(`Mark: ${mark} + Grade: A`);
    } else if (mark >= 60) {
        console.log(`Mark: ${mark} + Grade: A-`);
    } else if (mark >= 50) {
        console.log(`Mark: ${mark} + Grade: B`);
    } else if (mark >= 40) {
        console.log(`Mark: ${mark} + Grade: C`);
    } else if (mark >= 33) {
        console.log(`Mark: ${mark} + Grade: D`);
    } else {
        console.log(`Mark: ${mark} + Grade: F`);
    }
})