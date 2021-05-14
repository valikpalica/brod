const User = require('../API_DB/User');
const bcrypt = require('bcrypt');

const registration_funk = (obj) =>{
    return new Promise ((res,rej)=>{
        User.registration(obj,(data)=>{
            if(data){
                res(data);
            }
            else{
                rej(new Error('not valid value'));
            }
        })
    })
}
module.exports = registration_funk;