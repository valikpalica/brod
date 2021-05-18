const Admin = require('../../API_DB/Admin');

module.exports = (req,res)=>{
    try {
        Admin.selectInfoPerson(req.body,(data)=>{
            res.status(200).json(data);
        })
    } catch (error) {
        res.status(400).json('err');
        console.error(error);
    }
}