// create the manager card
const generateManagerCard = function(manager) {
    return `
        <div class="column">
            <div class="card" style="width: 18rem;">
                <div class="card-body bg-dark text-white">
                    <h3 class="card-title text-white">${manager.name}</h3>
                    <h3 class="card-text text-white">Manager</h3>
                    <div class="bg-light text-dark">
                        <div class="card-text">
                            Employee ID: ${manager.id}
                        </div>
                        <div class="card-text">
                            Employee Email Address: ${manager.emailAddress}
                        </div>
                        <div class="card-text">
                            Manager Office No: ${manager.officeNo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
};

// create the engineer card
const generateEngineerCard = function(engineer) {
    return `
        <div class="column">
            <div class="card" style="width: 18rem;">
                <div class="card-body bg-dark text-white">
                    <h3 class="card-title text-white">${engineer.name}</h3>
                    <h3 class="card-text text-white">Manager</h3>
                    <div class="bg-light text-dark">
                        <div class="card-text">
                            Employee ID: ${engineer.id}
                        </div>
                        <div class="card-text">
                            Employee Email Address: ${engineer.emailAddress}
                        </div>
                        <div class="card-text">
                            GitHub Username: ${engineer.gitHubUser}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
};

// create the Intern card
const generateInternCard = function(intern) {
    return `
        <div class="column">
            <div class="card" style="width: 18rem;">
                <div class="card-body bg-dark text-white">
                    <h3 class="card-title text-white">${intern.name}</h3>
                    <h3 class="card-text text-white">Manager</h3>
                    <div class="bg-light text-dark">
                        <div class="card-text bg-light text-black">
                            Employee ID: ${intern.id}
                        </div>
                        <div class="card-text bg-light text-black">
                            Employee Email Address: ${intern.emailAddress}
                        </div>
                        <div class="card-text bg-light text-black">
                            Intern School: ${intern.school}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
};

// export function to generate entire page
module.exports = (employeeData) => {
    let cardValues = ""
    
    for (let i = 0; i < employeeData.length; i++) {
        //swtich statement looks at the text value of getRole, hence quotes on the case statement
        switch(employeeData[i].getRole())
        {
            case 'Manager':
                cardValues += generateManagerCard(employeeData[i])
            break;
            case 'Engineer':
                cardValues += generateEngineerCard(employeeData[i])
            break;
            case 'Intern':
                cardValues += generateInternCard(employeeData[i])
            break;
        }
    } 
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-white bg-danger py-2 px-3 text-center">My Team</h1>
        </div>
        </header>
        <main class="container my-5">
            <div class="row justify-content-around">
            ${cardValues}
            </div>
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy;2021 by Mark</h3>
        </footer>
    </body>
    </html>
    `;
    };
  
    //            