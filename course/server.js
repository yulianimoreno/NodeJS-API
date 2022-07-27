const http =require('http');
const fs=require('fs');
const server=http.createServer((req, res)=>{
    console.log(req.url, req.method);
    //Set header content type
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data)
            res.end();
        }
        
    });
});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on por 30000');
});