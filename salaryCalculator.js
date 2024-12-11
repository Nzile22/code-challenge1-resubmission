const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function netSalaryCalculator() {
    rl.question("Enter basic salary: ", (basicInput) => {
        rl.question("Enter benefits: ", (benefitsInput) => {
            const basicSalary = parseFloat(basicInput);
            const benefits = parseFloat(benefitsInput);

            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input! Please enter valid numbers for salary and benefits.");
                rl.close();
                return;
            }

            // Calculate gross salary
            const grossSalary = basicSalary + benefits;

            // Payee (Tax) calculation
            let payee = 0;
            if (grossSalary <= 24000) {
                payee = grossSalary * 0.1; // 10% tax
            } else if (grossSalary <= 32333) {
                payee = grossSalary * 0.25; // 25% tax
            } else {
                payee = grossSalary * 0.3; // 30% tax
            }

            // NHIF Deductions based on gross salary
            let nhif = 0;
            if (grossSalary <= 5999) nhif = 150;
            else if (grossSalary <= 7999) nhif = 300;
            else if (grossSalary <= 11999) nhif = 400;
            else if (grossSalary <= 14999) nhif = 500;
            else if (grossSalary <= 19999) nhif = 600;
            else if (grossSalary <= 24999) nhif = 750;
            else if (grossSalary <= 29999) nhif = 850;
            else if (grossSalary <= 34999) nhif = 900;
            else if (grossSalary <= 39999) nhif = 950;
            else nhif = 1000;

            // NSSF Deductions
            const nssf = grossSalary * 0.06; // 6% of gross salary

            // Calculate net salary
            const netSalary = grossSalary - (payee + nhif + nssf);

            console.log(`Gross Salary: ${grossSalary}`);
            console.log(`Payee (Tax): ${payee}`);
            console.log(`NHIF Deduction: ${nhif}`);
            console.log(`NSSF Deduction: ${nssf}`);
            console.log(`Net Salary: ${netSalary}`);

            rl.close();
        });
    });
}

netSalaryCalculator();
