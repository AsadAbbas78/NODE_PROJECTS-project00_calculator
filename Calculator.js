import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "number one",
        message: "kindly enter your first number",
    },
    {
        type: "number",
        name: "number Two",
        message: "kindly enter your second number",
    },
    {
        type: "list",
        name: "Operator",
        choices: ["*", "+", "-", "/"],
        message: "select Operator: ",
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("kindly enter a valid input");
}
