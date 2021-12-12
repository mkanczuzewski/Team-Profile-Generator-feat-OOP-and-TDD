// create the Info Cards section
const generateInfoCard = employee => {
    return `
        <section>
            <div class="flex-row justify-space-between">
            ${infoArr
                .map(({ name, empId, emailAdd, officeNo }) => {
                return `
                    <div class="class= card bg-dark text-white">
                        <h3 class="text-white">${name}</h3>
                        <h3 class="text-white">${name}</h3>
                        <h5 class="text-white">
                            Employee ID: ${empId}
                        </h5>
                        <h5 class="text-white">
                            Employee Email Address: ${emailAdd}
                        </h5>
                        <h5 class="text-white">
                            Manager Office No: ${officeNo}
                        </h5>
                    </div>
                `;
                })
            .join('')
            }
            </div>
        </section>
      `;
};

generatePage = (employeeData) =>{

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
  