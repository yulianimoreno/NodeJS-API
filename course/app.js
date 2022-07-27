const express=require('express');
const app=express();
//Register view engine 
app.set('view engine', 'ejs');
app.set('views', 'views-ejs');

app.listen(3000);
app.get('/', (req, res)=>{
    const blogs=[
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consecutor'},
        {title: 'Mario finds eggs', snippet: 'Lorem ipsum dolor sit amet consecutor'},
        {title: 'How to build an app', snippet: 'Lorem ipsum dolor sit amet consecutor'},
        {title: 'How to connect the database with java', snippet: 'Lorem ipsum dolor sit amet consecutor'},
    ];
    res.render('index', {title: 'Home', blogs:blogs});
});
app.get('/about', (req, res)=>{
    //res.send('<p>About page</p>');
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create a new blog'})
});

//404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: 'Not found'});
});