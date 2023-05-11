const express = require('express');
const app = express();
//const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors())


app.get('/status', function(req, res) {
    //const data = JSON.parse(fs.readFileSync(jokesPath));
    //const randomIndex = Math.floor(Math.random() * data.length);
    //res.status(200).send(data[randomIndex]);
    res.status(200).send({
        message: "success"
    });
});
 

app.post('/register', function(req, res) {
    //const data = JSON.parse(fs.readFileSync(jokesPath));
    //const randomIndex = Math.floor(Math.random() * data.length);
    const data = req.body
    //res.status(200).send(data[randomIndex]);
    fs.writeFileSync('./files/monfichier.txt',`email: ${data.email}, password: ${data.password} `, (err) => {
        if (err) throw err;
        console.log('Fichier écrit avec succès !');} )
    res.status(200).send({
        message: ` ${data} success registered !!`
    });
});

app.post('/config-color', function(req, res) {
    //const data = JSON.parse(fs.readFileSync(jokesPath));
    //const randomIndex = Math.floor(Math.random() * data.length);
    const data = req.body
    //res.status(200).send(data[randomIndex]);
    fs.writeFileSync('./files/monfichier.txt',`email: ${data.email}, password: ${data.password} `, (err) => {
        if (err) throw err;
        console.log('Fichier écrit avec succès !');} )
    res.status(200).send({
        message: ` ${data} success registered !!`
    });
});

app.post('/config-bouton', function(req, res) {
    //const data = JSON.parse(fs.readFileSync(jokesPath));
    //const randomIndex = Math.floor(Math.random() * data.length);
    const data = req.body
    //res.status(200).send(data[randomIndex]);
    fs.writeFileSync('./files/monfichier.txt',`email: ${data.email}, password: ${data.password} `, (err) => {
        if (err) throw err;
        console.log('Fichier écrit avec succès !');} )
    res.status(200).send({
        message: ` ${data} success registered !!`
    });
});

app.post('/config-card', function(req, res) {
    //const data = JSON.parse(fs.readFileSync(jokesPath));
    //const randomIndex = Math.floor(Math.random() * data.length);
    const data = req.body
    //res.status(200).send(data[randomIndex]);
    fs.writeFileSync('./files/monfichier.txt',`email: ${data.email}, password: ${data.password} `, (err) => {
        if (err) throw err;
        console.log('Fichier écrit avec succès !');} )
    res.status(200).send({
        message: ` ${data} success registered !!`
    });
});



const host = 'localhost';
const port = process.env.PORT || 4002 ;


app.listen(port, host,  ()=>{
    console.log(`Serveur demarré sur http://${host}:${port}/`);
})