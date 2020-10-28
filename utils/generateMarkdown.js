// function to generate markdown for README
function generateMarkdown(response, licBadge, licText) {
  return `# ${response.title} \n\r ${licBadge}
  ## Description \n\r ${response.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing) 
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${response.install}
  ## Usage
  ${response.usage}
  ## License - ${response.license}
  ${licText}
  ## Contributing
  ${response.contribute}
  ## Tests
  ${response.test}
  ## Questions
  With further questions, please contact me: 
  * GitHub username: [${response.profile}](https://github.com/${response.profile})
  * Email: ${response.email}
`;
}

module.exports = generateMarkdown;
