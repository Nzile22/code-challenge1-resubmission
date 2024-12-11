const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector() {
    rl.question("Enter car speed: ", (input) => {
        const speed = parseInt(input, 10);

        if (isNaN(speed) || speed < 0) {
            console.log("Invalid speed! Please enter a positive number.");
            rl.close();
            return;
        }

        const speedLimit = 70;
        const kmPerPoint = 5;

        if (speed <= speedLimit) {
            console.log("Ok");
        } else {
            const points = Math.floor((speed - speedLimit) / kmPerPoint);

            if (points > 12) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${points}`);
            }
        }

        rl.close();
    });
}

speedDetector();
