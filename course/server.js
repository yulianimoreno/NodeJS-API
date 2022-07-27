const http =require('http');
const server=http.createServer((req, res)=>{
    console.log(req.url, req.method);
    //Set header content type
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hello, world</p>');
    res.write('<p>Hello again, world</p>');
    res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on por 30000');
});