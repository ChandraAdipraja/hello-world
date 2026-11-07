const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Hello World!</h1>
        <p>Berhasil dijalankan menggunakan Dokku PaaS.</p>
        <p>Server: VM3</p>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});