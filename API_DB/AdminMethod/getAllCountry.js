const mysql = require('../connection');

const GetAllCountry = () =>{
    return new Promise((res,rej)=>{
        mysql.query('select * from country;',(err,result) =>{
            if(err){
                rej(new Error(err));
            }
            else{
                res(result);
            }
        });
       })
} 
module.exports = GetAllCountry;