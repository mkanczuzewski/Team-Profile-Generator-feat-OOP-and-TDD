// export function to generate entire page
module.exports = () => {
    // destructure page data by section
   // const { projects, about, ...header } = templateData;
  
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
      <main>

      </main>
      <footer>
       
      </footer>
    </body>
    </html>
    `;
  };
  