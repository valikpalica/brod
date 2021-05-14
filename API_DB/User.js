const select = require('./UsersMethod/SelectUser')
const insert = require('./UsersMethod/InserUser');

const  User  = class {
    registration(obj,callback){
        insert(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    };
    find(obj,callback){
     select(obj).then(data=>{
         callback(data[0]);
     }).catch(err=>{
         console.error(err);
     })
    }
} 

module.exports = new User;