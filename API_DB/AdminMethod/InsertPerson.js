const mysql = require('../connection');

const insertPerson = (obj) =>{
    let {name,surname,patronime,date,nationality} = obj;
    return new Promise((res,rej)=>{
        mysql.query('insert into person (name,surname,patronime,date,nationality) values (?,?,?,?,?);',[name,surname,patronime,date,nationality],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = insertPerson; 