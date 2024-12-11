const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradeGenerator() {
    rl.question("Enter student marks (between 0 and 100): ", (input) => {
        const marks = parseInt(input, 10);

        if (marks > 100 || marks < 0 || isNaN(marks)) {
            console.log("Invalid marks! Please enter a value between 0 and 100.");
        } else if (marks > 79) {
            console.log("Grade: A");
        } else if (marks >= 60) {
            console.log("Grade: B");
        } else if (marks >= 50) {
            console.log("Grade: C");
        } else if (marks >= 40) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }

        rl.close();
    });
}

studentGradeGenerator();