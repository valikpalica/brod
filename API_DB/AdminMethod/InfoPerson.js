const mysql = require('../connection');

const infoPerson = (obj) =>{
    let {person_id} = obj;
    return new Promise((res,rej)=>{
        mysql.query('select  travel.date as date_travel, person.*, country.name from person inner join travel on person.id_person = travel.person_id inner join country on travel.country_id = country.id_country where person.id_person = ?;',[person_id],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = infoPerson;