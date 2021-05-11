const select = require('./UsersMethod/SelectUser')
const insert = require('./UsersMethod/InserUser');


const  User  = class {
    registration(obj,callback){
        insert(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.log(err);
        })
    };
    find(login,password,callback){
     select(login,password).then(data=>{
         callback(data);
     }).catch(err=>{
         console.log(err);
     })
    }
} 

module.exports = User;