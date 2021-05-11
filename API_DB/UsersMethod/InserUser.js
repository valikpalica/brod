const mysql = require('../connection');

const InsertUser = async (obj) =>{
    let {login,password,status} = obj;

    mysql.query('insert into user (login,password,status) values (?,?,?)',[login,password,status],(err,result)=>{
        if(err){
            throw new Error(err);
        }
        else{
            return result;
        }
    })
}
module.exports = InsertUser;