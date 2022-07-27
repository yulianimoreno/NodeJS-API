const fs=require('fs');
//Read files
fs.readFile("./docs/blog1.txt", (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');

//Write file 
fs.writeFile('./docs/blog1.txt', 'hello world', ()=>{
    console.log('file was written');
});

//directores Create the folder "assets"
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created')
    })
}


//delete a file 
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted')
    })
}