const mysql = require('../connection');

const infoPerson = (obj) =>{
    let {person_id} = obj;
    let response = {};
    return new Promise((res,rej)=>{
        mysql.query('select * from person where person.id_person = ?;',[person_id],(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                let date = new Date(result[0].date);
                result[0].date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
                response['person']  = result;
                mysql.query('select  travel.date as date_travel,  country.name from person inner join travel on person.id_person = travel.person_id inner join country on travel.country_id = country.id_country where person.id_person = ?;',[person_id],(err,result_country)=>{
                    if(err){
                        rej(new Error(err));
                    }
                    else{
                        for(let i = 0;i<result_country.length;i++){
                            let date_country = new Date(result_country[i].date_travel);
                            result_country[i].date_travel  = `${date_country.getFullYear()}-${date_country.getMonth()+1}-${date_country.getDate()}`;
                        }
                        response['countrys'] = result_country.length==0? [] : result_country;
                        res(response);
                    }
                })
            }
        });
       })
} 
module.exports = infoPerson;