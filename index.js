const express = require('express')

const app=express()
const port=3000

let requirements = [
    {
        id: 1,
        title: 'Requirement 1',
        description: 'Requirement 1 description'
    },    
    {
        id: 2,
        title: 'Requirement 2',
        description: 'Requirement 2 description'
    },    
    {
        id: 3,
        title: 'Requirement 3',
        description: 'Requirement 3 description'
    }
];

//GEt the requirement list in the form of json
app.get('/requirement', (req, res) => {
    res.json(requirements);
})
//Set the server to listen at port 
app.listen(port, ()=>console.log('Server listening at port:', port));