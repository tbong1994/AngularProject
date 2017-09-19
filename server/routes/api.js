
//express framework
const express = require('express');
const router = express.Router();

//http requests
const http = require('http');
const axios = require('axios');
const db = require('../database-service');
const API = 'https://jsonplaceholder.typicode.com';

//DB TABLE COLUMNS
//(name VARCHAR(255), house VARCHAR(255), face VARCHAR(255), cssClass VARCHAR(255)

/*GRAB EVERYONE */
router.get('/wizards', (req, res) => {
    query = "SELECT * FROM wizardsdb"; //get all wizards from the database.
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    db.query(query, (err, response) => {
        if(err){
            console.log(err.message);
            return;
        }
        res.send(response);
    });
});

/*GRAB ONE WIZARD */
router.get('/wizard/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const lastSlashIndex = req.originalUrl.lastIndexOf('/');
    var requestedWizardName = req.originalUrl.substring(lastSlashIndex + 1); //get wizard's name from the url.
    requestedWizardName = requestedWizardName.replace('%20',' '); //replace space in the name from the request URL. URL has '%20' for space.
    query = "SELECT * FROM wizardsdb WHERE name = " + '"' + requestedWizardName + '"'; //specific wizard query.
    db.query(query, (err, response) => {
        if(err){
            console.log(err.message);
            return;
        }
        console.log(response);
        res.send(response);
    });
});

/*UPDATE ONE WIZARD */
router.put('/wizard/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    query = "UPDATE wizardsdb SET  name = " + '"' + req.body.name + '" WHERE id = ' + req.body.id; //specific wizard query.
    db.query(query, (err, response) => {
        if(err){
            console.log(err.message);
            return;
        }
        res.send(response);
    });
});


/*AUTHENTICATE LOGIN */
router.post('/login/:username/:password', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var username = req.body.username;
    var password = req.body.password;
    query = "SELECT * FROM login WHERE username = '" + username + "' AND '" + password + "'";
    db.query(query, (err,response)=>{
        if(err){
            console.log(err.message);
            return;
        }
        console.log(response);
        res.send(response);
    });
});
module.exports = router;