const mysql = require('../connection');

const addTravel = (obj) =>{
    let {country_id,peron_id,date} = obj;
    return new Promise((res,rej)=>{
        mysql.query('insert into travel (country_id,person_id,date) values (?,?,?)',[country_id,peron_id,date],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = addTravel;