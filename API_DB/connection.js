const mysql = require('mysql2');
const configure = require('./configure.json');
const connection = mysql.createConnection({
    host:configure.host,
    user:configure.user,
    database:configure.database,
    password:configure.password
});
connection.connect((err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log('Connection DB');
    }
});
module.exports = connection;