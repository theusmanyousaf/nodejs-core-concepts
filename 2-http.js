const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page.")
    }
    else if (req.url === '/about') {
        res.end("Welcome to our about page.")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>The requested page does not exist</p>
        <a href='/'>Back Home</a>
        `)
})

server.listen(5000)