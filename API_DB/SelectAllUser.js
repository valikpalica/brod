const mysql = require('./connection');
 
const getAllUser = () =>{
    mysql.execute('select * from user',(err,result)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log(result);
        }
    })
};
module.exports = getAllUser;