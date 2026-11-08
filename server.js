const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World - Version 2</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #111827;
            color: white;
            font-family: Arial, sans-serif;
          }

          .card {
            max-width: 500px;
            margin: 20px;
            padding: 40px;
            text-align: center;
            background: #1f2937;
            border-radius: 16px;
            border: 1px solid #374151;
          }

          h1 { color: #34d399; }

          .status {
            color: #34d399;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <main class="card">
          <h1>Hello World - Version 2</h1>
          <p>This application is successfully deployed using Dokku PaaS.</p>
          <p class="status">Application is running successfully!</p>
          <hr>
          <small>Node.js + Dokku + Docker</small>
        </main>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
