const mysql = require('../connection');

const InsertCountry = (obj) =>{
    let {name} = obj;
    return new Promise((res,rej)=>{
        mysql.query('insert into country (name) values (?);',[name],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = InsertCountry;