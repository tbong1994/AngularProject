
//express framework
const express = require('express');
const router = express.Router();

//http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const db = require('mysql');
const con = db.createConnection({
    host: "localhost",
    user: "root",
    password: "Cjsthddl7!",
    database: "wizards"
});
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
    // sql = "SELECT * FROM wizards //get all wizards from the database.
    con.query();
});

module.exports = router;