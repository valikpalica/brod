const mysql = require('./connection');
 
const getAllUser = async (login,password) =>{
    mysql.query('select * from user where login = ? and password = ?;',[login,password],(err,result)=>{
        if(err){
            throw new Error(err);
        }
        else{
            return result;
        }
    });
};
module.exports = getAllUser;