const express=require('express');
const app=express();
//Register view engine 
app.set('view engine', 'ejs');
app.set('views', 'views-ejs');

app.listen(3000);
app.get('/', (req, res)=>{
    //res.send('<p>Home page</p>');
    res.render('index')
});
app.get('/about', (req, res)=>{
    //res.send('<p>About page</p>');
    res.render('about');
});

app.get('/blogs/create', (req, res)=>{
    res.render('create')
});

//404 page
app.use((req, res)=>{
    res.status(404).render('404');
});