// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ## Description
   ${data.description}
   ## Table of Contents
   * [Installation Instructions](#installation-instructions)
   
   * [Usage Instructions](#usage-instructions)
   
   * [Contribution](#Contribution)
   
   * [Developers Contact Information](#Developers-Contact-Information)
     ${licenseLink(data.license)}
   ## Installation Instructions
   ${data.installation}
   ## Usage Instructions
   ${data.usage}
   ## Contributiion
   ${data.contribution}
   
   ## Developers Contact Information
    * LinkdIn Profile: ${data.linkdin}
    * URL : ${data.url}
    * Email: ${data.email}
   ${displayLicense(data.license)}
  `;
}

module.exports = generateMarkdown;
