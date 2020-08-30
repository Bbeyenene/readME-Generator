// array of questions for user
const questions = [
    // Title
    {type: 'input',
     name: 'title',
     message: 'What is the title of the project? (Required)',
    },
    //Description
    {type: 'input',
     name: 'description',
     message: 'Provide a breif description of the project. (Required)',
    },
    //Installation information
    {type: 'input',
     name: 'installation',
     message: 'What are the installattion requierements and guide for this project? (Required)',
    },
    //Usage Instructions
    {type: 'input',
     name: 'usage',
     message: 'Provide brief directions for use and include gifs and/or screenshots as needed. (Required)',
    },
    //   License and Badge
    {type: 'list',
     name: 'license',
     message: 'Select a license for this project. (Required)',
     choices: ['MIT','ISC', 'Zlib', 'None']
    },
    //contribution
    {type: 'input',
     name: 'contribution',
     message: 'Provide guidelines how to contribute to this Project.  (Required)',
    },
    //linkden
    {type: 'input',
     name: 'linkdin',
     message: 'What is LinkdIn profile.  (Required)',
    },

    //GitHub
    {type: 'input',
     name: 'url',
     message: 'What is your deployed URL?',
    },
    //Email
    {type: 'input',
     name: 'email',
     message: 'What is your email address?',
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
}

// function call to initialize program
init();
