const registration_funk = require('../../API_WK/reg_funk');

module.exports = (req,res)=>{
    registration_funk(req.body).then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json(err);
    });
};