const http = require('http');
// const url = require('url');
// const uel = require('url');
const server = http.createServer((a, b) => {
    // const newurl = url.parse(a.url, true)
    
    b.writeHead(200, { 'Content-Type': "text/html" })
    b.write(`<h2>This is Home page from nodejs</h2>`)

    // if (newurl.pathname === '/') {
    // }
    // else if (newurl.pathname === '/about') {
    //     b.write(`<h2>This is About pagr</h2>`)
    // }
    // else if (newurl.pathname === '/contact') {
    //     b.write(`<h2>This is Contact pagr</h2>`)
    // }
    // else {
    //     b.write(`<h2>404 Page not fount</h2>`)

    // }

    b.end();
});
server.listen(8080, () => {
    console.log('server start from port :8080');
})