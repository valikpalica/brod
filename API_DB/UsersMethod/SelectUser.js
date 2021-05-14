const mysql = require('../connection');
 
const getAllUser = async (obj) =>{
   return new Promise((res,rej)=>{
    let {username} = obj;
    mysql.query('select * from user where login = ?;',[username],(err,result) =>{
        if(err){
            rej(new Error(err));
        }
        else{
            res(result);
        }
    });
   })
};
module.exports = getAllUser;