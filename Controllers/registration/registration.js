const registration_funk = require('../../API_WK/reg_funk');

module.exports = (req,res)=>{
    let obj = {
        login:'valik',
        password:'3177',
        status:'admin',
    }
    registration_funk(obj).then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json(err);
    });
};