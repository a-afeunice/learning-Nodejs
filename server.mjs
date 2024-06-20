import { createServer } from 'node:http';




// Create HTTP Server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // Create file
        writeFile('./abc.html', '<h1>Learning Node.js</h1>', (err) => {
            console.log('err');
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>We have an HTTP Server</h1>');
        });
    } else {
        // Delete file
        unlink('./hello.html', () => {
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>We have an HTTP Server</h1>');
        });
    }
});


// Listen for incoming request
server.listen(3000, '127.0.0.1', () => {

    console.log('Server is running');
});

// Arrow function
const handleRequest = () => { }