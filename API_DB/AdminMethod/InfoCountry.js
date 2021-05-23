const mysql = require('../connection');

const infoCountry = (obj) =>{
    let {country_id} = obj
    return new Promise((res,rej)=>{
        mysql.query('select COUNT(id_travel) as count_travel, YEAR(date) as year, country.name from travel inner join country on country_id = id_country where country_id =?  group by YEAR(date);',[country_id],(err,result) =>{
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