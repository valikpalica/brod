const mysql = require('../connection');

const infoCountry = (obj) =>{
    let {country_id} = obj
    return new Promise((res,rej)=>{
        mysql.query('select person.*, COUNT(person_id) as count from travel inner join person on person_id = id_person where country_id = ?;',[country_id],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = infoCountry;