const Admin = require('../../API_DB/Admin');

module.exports = (req,res)=>{
    try {
        Admin.addTravel(req.body,(data)=>{
            res.status(200).json(data);
        })
    } catch (error) {
        console.error(error);
    }
}