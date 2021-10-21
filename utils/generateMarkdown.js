// Generates README.md from answers solicited in index.js via inquirer questions
function generateMarkdown(answers) {
  return `
# ${answers.projectName}  
##Content ![badge](https://img.shields.io/badge/license-${answers.licensing}-blue)
- [Description](#description)
- [Installation](#installation)
- [Toolkit](#toolkit)
- [Licensing](#licensing)
- [Questions](#questions)
### Description  <a name="description"></a>
${answers.description} <br />
### Installation  <a name="installation"></a>
Here's how you setup this project:<br />
${answers.installation}  
### Toolkit  <a name="toolkit"></a>
This application built with ${answers.composition}  
### Licensing  <a name="licensing"></a> 
This application is covered by the ${answers.licensing} license. 
### Contributing  <a name="contributing"></a> 
Resources and people who contributed include: ${answers.credits} 
<br /> 
### Questions  <a name="questions"></a> 
Get in touch with me on Github: [${answers.username}](https://github.com/${answers.username})
<br />
If you have any additional questions, please contact me at: ${answers.email}
`;
}

module.exports = generateMarkdown;
