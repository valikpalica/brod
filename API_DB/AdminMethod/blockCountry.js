const mysql = require('../connection');

const blockCountry = (obj) =>{
    let {country_id,person_id,status} = obj;
    return new Promise((res,rej)=>{
        mysql.query('insert into enable (country_id,person_id,status) values (?,?,?)',[country_id,person_id,status],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = blockCountry;