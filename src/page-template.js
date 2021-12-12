// create the manager card
const generateManagerCard = function(manager) {
    return `
        <section>
            <div class="flex-row justify-space-between">
                <div class="class= card bg-dark text-white">
                    <h3 class="text-white">${manager.name}</h3>
                    <h3 class="text-white">Manager</h3>
                    <h5 class="text-white">
                        Employee ID: ${manager.empId}
                    </h5>
                    <h5 class="text-white">
                        Employee Email Address: ${manager.emailAdd}
                    </h5>
                    <h5 class="text-white">
                        Manager Office No: ${manager.officeNo}
                    </h5>
                </div>
            </div>
        </section>
      `;
};

// create the engineer card
const generateEngineerCard = function(engineer) {
    return `
        <section>
            <div class="flex-row justify-space-between">
                <div class="class= card bg-dark text-white">
                    <h3 class="text-white">${engineer.name}</h3>
                    <h3 class="text-white">Engineer</h3>
                    <h5 class="text-white">
                        Employee ID: ${engineer.empId}
                    </h5>
                    <h5 class="text-white">
                        Employee Email Address: ${engineer.emailAdd}
                    </h5>
                    <h5 class="text-white">
                        GitHub username: ${engineer.gitUser}
                    </h5>
                </div>
            </div>
        </section>
      `;
};

// create the Intern card
const generateInternCard = function(intern) {
    return `
        <section>
            <div class="flex-row justify-space-between">
                <div class="class= card bg-dark text-white">
                    <h3 class="text-white">${intern.name}</h3>
                    <h3 class="text-white">Intern</h3>
                    <h5 class="text-white">
                        Employee ID: ${intern.empId}
                    </h5>
                    <h5 class="text-white">
                        Employee Email Address: ${intern.emailAdd}
                    </h5>
                    <h5 class="text-white">
                        School Name: ${intern.school}
                    </h5>
                </div>
            </div>
        </section>
      `;
};

generatePage = (employeeData) =>{
    for (let i = 0; i < employeeData.length; i++) {
        //swtich statement looks at the text value of getRole, hence quotes on the case statement
        switch(employeeData[i].getRole())
        {
            case 'Manager':
                generateManagerCard(employeeData[i])
            break;
            case 'Engineer':
                generateEngineerCard(employeeData[i])
            break;
            case 'Intern':
                generateInternCard(employeeData[i])
            break;
        }
    } 
}

// // export function to generate entire page
// module.exports = () => {
//     // destructure page data by section
//    const { teamArray } = templateData;
  
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Team Profile Generator</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
//         <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//         <link rel="stylesheet" href="style.css">
//     </head>
    
//     <body>
//         <header>
//         <div class="container flex-row justify-space-between align-center py-3">
//             <h1 class="page-title text-white bg-danger py-2 px-3 text-center">My Team</h1>
//         </div>
//         </header>
//         <main class="container my-5">
//             ${generateInfoCard(teamArray)}
//         </main>
//         <footer class="container text-center py-3">
//             <h3 class="text-dark">&copy;2021 by Mark</h3>
//         </footer>
//     </body>
//     </html>
//     `;
//     };
  