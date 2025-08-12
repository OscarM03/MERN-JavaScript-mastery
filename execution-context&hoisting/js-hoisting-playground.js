#!/usr/bin/env node

// JS Hoisting Playground”: Build a Node CLI script where you can run small code snippets and predict vs. see actual hoisting behavior
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function explainingHoisting(code) {
    if (code.includes("var") && code.includes("console.log")) {
        return "Variables declared with 'var' are hoisted to the top but initialized with undefined.";
    }
    if (code.includes("function")) {
        return "Function declarations are hoisted with their full definition. Thus will give the expected output.";
    }
    return "Hoisting behavior depends on variable type and whether it's a declaration or initialization.";
}

rl.question("Enter your JavaScript code snippet to test hoisting: ", (code) => {

        console.log("\n Predcited Behavior: ");
        console.log(explainingHoisting(code));

        console.log("\n Actual Output: ")

        try {
           console.log(eval(code));
        } catch (error) {
            console.error("Error occurred while evaluating code:", error);
        }
        rl.close();
});

