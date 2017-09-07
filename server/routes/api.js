
//express framework
const express = require('express');
const router = express.Router();

//http requests
const http = require('http');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const db = require('mysql');
const con = db.createConnection({
    host: "localhost",
    user: "root",
    password: "Cjsthddl7!",
    database: "wizards"
});

con.connect(err =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("db connection successful");
})

//(name VARCHAR(255), house VARCHAR(255), face VARCHAR(255), cssClass VARCHAR(255)

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//GET ALL POSTS
router.get('/posts', (req, res) => {
    axios.get(`${API}/posts`).then(response => res.status(200).json(response.data))
    .catch(error => {
        res.status(500).send(error)
    });
});

router.get('/wizards', (req, res) => {
    query = "SELECT * FROM wizards"; //get all wizards from the database.
    responseToClient;
    con.query(query, (err, response) => {
        if(err){
            console.log(err.message);
            return;
        }
        console.log(response);
        responseToClient = response;
        con.end();
    });
    res.json(responseToClient);
});

router.put('/create', (req, res)=>{
    query = "INSERT INTO wizards('..', '..', '..', '..')";
    con.query(query, (err, res)=>{
        if(err){console.log(err.message);return;}
        console.log(res.status(200).json());
    });
});

module.exports = router;