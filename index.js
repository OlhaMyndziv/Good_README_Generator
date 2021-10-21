// Constants
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")
const writeAsync = util.promisify(fs.writeFile);

// Question 
// end result is 'answers' in total
function askUser() {
    return inquirer.prompt([
        {
            message: "What is your project named",
            type: "input",
            name: "projectName",
        },
        {
            message: "What is your Github usernane?",
            type: "input",
            name: "username",
            default: "github name",
        },
        {
            message: "What is your email address?",
            type: "input",
            name: "email",
        },
        {
            message: "Write a description of your project.",
            type: "input",
            name: "description",
        },
        {   // select from list
            message: "What License is this used with?",
            type: "list",
            name: "licensing",
            choices: [
                "MIT",
                "Mozilla",
                "Open",
                "Other"]
        },
        {   // check multiple options
            message: "What language(s) did you use to create your project?",
            type: "checkbox",
            name: "composition",
            choices: [
                "HTML", 
                "CSS", 
                "JavaScript", 
                "Other"],
        },
        {
            message: "Please provide instructions to get started with your project.",
            type: "input",
            name: "installation",
        },
        {
            message: "Who, what, and how were you assisted in this project?",
            type: "input",
            name: "credits",
        }
    ]);
}
async function init() {
    try {
        const answers = await askUser();
        const buildContent = generateMarkdown(answers);
        writeAsync("./res/README.md", buildContent);
        // overwrites last version - no new document
        console.log("README.md successfully created in the res folder.");
    } catch (err) {
        console.log(err);
    }
}

init();
