const selectAll  = require('./AdminMethod/getAllPeople');
const selectCountry  = require('./AdminMethod/getAllCountry');
const insertPeroson = require('./AdminMethod/InsertPerson');
const insertCountry = require('./AdminMethod/insertCountry');
const BlockCountry = require('./AdminMethod/blockCountry');
const AddTravel = require('./AdminMethod/AddTravel');
const infoCountry = require('./AdminMethod/InfoCountry');
const infoPerson = require('./AdminMethod/InfoPerson');
const selectBlockCountry = require('./AdminMethod/GetBlockCountry');
const selectEnableCountry = require('./AdminMethod/getEnableCountry');
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
    blockCountry(obj,callback){
        BlockCountry(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
    addTravel(obj,callback){
        AddTravel(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
    selectInfoCountry(obj,callback){
        infoCountry(obj).then(data=>{
            callback(data)
        }).catch(err=>{
            console.error(err);
        })
    }
    selectInfoPerson(obj,callback){
        infoPerson(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
    getBlockCountry(obj,callback){
        selectBlockCountry(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
    getEnableCountry(obj,callback){
        selectEnableCountry(obj).then(data=>{
            callback(data);
        }).catch(err=>{
            console.error(err);
        })
    }
}

module.exports = new Admin;