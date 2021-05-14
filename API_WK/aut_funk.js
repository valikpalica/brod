const User = require('../API_DB/User');

const autorization_funk = (obj) =>{
    return new Promise ((res,rej)=>{
        User.find(obj,(data)=>{
            if(data.length!==0){
                res(data);
            }
            rej(new Error('no data'));
        })
    })
}
module.exports = autorization_funk;