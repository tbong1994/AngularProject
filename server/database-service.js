
const db = require('mysql');
const con = db.createConnection({
    host: "localhost",
    user: "root",
    password: "Cjsthddl7!",
    database: "wizard"
});
con.connect(err =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("db connection successful");
})

module.exports = con;