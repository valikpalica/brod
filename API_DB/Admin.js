const selectAll  = require('./AdminMethod/getAllPeople');
const selectCountry  = require('./AdminMethod/getAllCountry');
const insertPeroson = require('./AdminMethod/InsertPerson');
const insertCountry = require('./AdminMethod/insertCountry');
const Admin = class {
    getAllPeople(callback){
        selectAll().then(data=>{
            callback(data)
        }).catch(err=>{
            console.error(err);
        })
    }
    getAllCountry(callback){
        selectCountry().then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
    insertPerson(obj,callback){
        insertPeroson(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
    insertCountry(obj,callback){
        insertCountry(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
}

module.exports = new Admin;