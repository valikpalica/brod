const mysql = require('../connection');

const getAllPeople = () =>{
    return new Promise((res,rej)=>{
        mysql.query('select * from person;',(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = getAllPeople;