const Admin = require('../../API_DB/Admin');
module.exports = (req,res)=>{
    try {
            Admin.insertCountry(req.body,(data)=>{
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(400).json('err')
    }
}