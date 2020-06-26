const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.send('Hello World! This is the Home Page.  Try /students');
});

app.get('/students', (req, res) => res.send('This will be a list of students'))

app.get('/grades', (req, res) => res.send('This page will show the grades of a particular user'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))