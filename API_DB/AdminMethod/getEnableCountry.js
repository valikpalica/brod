const mysql = require('../connection');

const blockCountry = (obj) =>{
    let {person_id} = obj;
    return new Promise((res,rej)=>{
        mysql.query("select * from country where id_country not in (select country.id_country from enable inner join country on country_id = id_country inner join person on person_id = id_person where person_id = ? and status = 'block');",[person_id],(err,result) =>{
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