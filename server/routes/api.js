
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
    res.send('test');
});

router.get('/test', (req, res) => {
    query = "SELECT * FROM wizards"; //get all wizards from the database.
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

router.put('/create', (req, res)=>{
    query = "INSERT INTO wizards('..', '..', '..', '..')";
    db.query(query, (err, res)=>{
        if(err){console.log(err.message);return;}
        console.log(res.status(200).json());
    });
});

module.exports = router;