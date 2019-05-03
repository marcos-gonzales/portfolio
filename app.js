const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'pug');

app.set(port, (req, res) => {
    res.send(`Hello world`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/skills', (req, res) => {
    res.render('skills');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    req.body.name
    req.body.message
    req.body.email
    res.redirect('/')
})