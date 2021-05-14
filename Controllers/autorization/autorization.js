const autorization_funk = require('../../API_WK/aut_funk');
const cookieParser = require('cookie-parser');
module.exports = async (req,res) =>{
    let {username} = req.body; 
    autorization_funk({username}).then(user=>{
        res.cookie('status',user.status,{
            maxAge: 3600 * 24,
        });
        res.redirect('/page/allPerson');
    }).catch(err=>{
        console.log(err);
    })
}