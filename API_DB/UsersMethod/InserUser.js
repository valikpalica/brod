const mysql = require('../connection');
const bcrypt = require('bcrypt');
const InsertUser =  (obj) =>{
    return new Promise(async (res,rej)=>{
    let {login,password,status} = obj;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password,salt);
    mysql.query('insert into user (login,password,status) values (?,?,?)',[login,hash,status],(err,result)=>{
        if(err){
            rej(new Error(err));
        }
        else{
            res(result);
        }
    })
    })
}
module.exports = InsertUser; 