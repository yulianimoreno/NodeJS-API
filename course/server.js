const http =require('http');
const fs=require('fs');
const _=require('lodash');

const server=http.createServer((req, res)=>{
    //lodash
    const num=_.random(0,20);
    console.log(num);
    const great=_.once(()=>{
        console.log('hello');
    });
    great();
    great();
    
    //Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path='./views/';
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path +='about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            path +='about.html';
            res.statusCode=301;  //Redirect
            res.setHeader('Location', '/about');
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode=404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data)
            
            res.end(data);
        }
        
    });
});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on por 30000');
});